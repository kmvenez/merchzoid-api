#!/bin/bash

API="http://localhost:4741"
URL_PATH="/merch"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
