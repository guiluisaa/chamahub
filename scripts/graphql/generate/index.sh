#!/bin/bash
echo "⬆  Generating graphql types..."
DOTENV_CONFIG_PATH=./.env.local graphql-codegen --config codegen.yml -r dotenv/config
