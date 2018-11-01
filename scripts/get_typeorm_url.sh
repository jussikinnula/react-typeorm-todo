#!/bin/sh
if [ -n "$TYPEORM_URL" ]; then
  echo $TYPEORM_URL
elif [ -n "$DATABASE_URL" ]; then
  echo $DATABASE_URL
else
  echo "postgres://localhost:5432/react-typeorm-test"
fi