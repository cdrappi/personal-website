#!/bin/sh
 
# Re-build our app
npm run build;

built_site_path=${CODE_PATH}/cdrappi.github.io/;
public_site_path=${CODE_PATH}/personal_website/;

# Copy our built files to a new repo
cp public/ built_site_path;
cd built_site_path;

commit_message=""
if [ "$1" != "" ]; then
    commit_message="$1"
fi


git add -A :/ && git commit -am commit_message && git push origin master

cd public_site_path;