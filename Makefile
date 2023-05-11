
default: build

build:
	npm run build

deploy:
	netlify deploy --prod -d out

freshdeploy: build deploy

clean:
	@rm -rf out
