"""Offline integration example only. No proprietary engine is included."""
import argparse
import json
import math

def validate_request(data):
    if not isinstance(data, dict) or set(data) != {"run_id", "records"}:
        raise ValueError("Expected run_id and records only")
    if not isinstance(data["run_id"], str) or not data["run_id"]:
        raise ValueError("run_id must be a nonempty string")
    records = data["records"]
    if not isinstance(records, list) or not records:
        raise ValueError("records must be a nonempty list")
    seen = set()
    for record in records:
        if not isinstance(record, dict) or set(record) != {"record_id", "features"}:
            raise ValueError("Each record requires record_id and features only")
        key = record["record_id"]
        if not isinstance(key, str) or not key or key in seen:
            raise ValueError("record_id must be a unique nonempty string")
        seen.add(key)
        features = record["features"]
        if not isinstance(features, dict) or not features:
            raise ValueError("features must be a nonempty object")
        for value in features.values():
            if isinstance(value, bool) or not isinstance(value, (int, float)):
                raise ValueError("features must contain numeric values")
            try:
                finite = math.isfinite(value)
            except OverflowError:
                finite = False
            if not finite:
                raise ValueError("features must contain finite values")
    return data

def mock_evaluate(data):
    validate_request(data)
    return {
        "run_id": data["run_id"],
        "provenance": "integration_mock",
        "engine_version": "not-connected",
        "baseline_version": "not-executed",
        "decisions": [
            {"record_id": row["record_id"], "route": "invoke_baseline",
             "reason_code": "synthetic_contract_example"}
            for row in data["records"]
        ],
    }

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--mock", action="store_true",
                        help="Generate synthetic integration outputs")
    parser.add_argument("--input", required=True)
    args = parser.parse_args()
    if not args.mock:
        parser.error("Only offline --mock mode is available; no engine endpoint is configured")
    try:
        with open(args.input, encoding="utf-8") as source:
            data = json.load(source)
        result = mock_evaluate(data)
    except (ValueError, OSError) as error:
        parser.exit(2, "Input error: " + str(error) + "\n")
    print(json.dumps(result, indent=2, allow_nan=False))

if __name__ == "__main__":
    main()
