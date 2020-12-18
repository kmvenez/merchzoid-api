#!/bin/bash

API="http://localhost:4741"
URL_PATH="/merch"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "merch": {
      "title": "'"${TITLE}"'",
      "type": "'"${TYPE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
