# Contributing

- [Steps](#steps)
- [Ways You Can Contribute](#ways-you-can-contribute)
- [Guidelines](#guidelines)
  - [Text](#text)
  - [Links](#links)
  - [Images](#images)
  - [Locations](#locations)
- [Local Development](#local-development)
- [Adding a new apprenticeship](#adding-a-new-apprenticeship)
- [Making a Pull Request](#making-a-pull-request)

## Steps

> To get started...

- 🍴 Fork this repo [here](https://github.com/FrancesCoronel/apprenticeships#fork-destination-box)
- 🔨 **Read through the contributing guidelines below**
- 👥 Add yourself to the Contributors section in the README
- 🔧 Make a pull request [here](https://github.com/FrancesCoronel/apprenticeships/compare)
- 🎉 Get your pull request approved - success!

## Ways You Can Contribute

- [Add apprenticeship](https://github.com/FrancesCoronel/apprenticeships/issues/new?template=add-apprenticeship.yml) - Add an apprenticeship to our growing list 🌱
- [Report a bug](https://github.com/FrancesCoronel/apprenticeships/issues/new?template=bug-report.yml) - Create a bug report to help us improve this website 🐛
- [Edit apprenticeship](https://github.com/FrancesCoronel/apprenticeships/issues/new?template=edit-apprenticeship.yml) - Edit an existing apprenticeship 📝
- [Suggest a feature](https://github.com/FrancesCoronel/apprenticeships/issues/new?template=feature-request.yml) - Suggest an idea for this project 💡
- [Remove apprenticeship](https://github.com/FrancesCoronel/apprenticeships/issues/new?template=remove-apprenticeship.yml) - Remove an existing apprenticeship 🔻
- Or just [pick an issue form](https://github.com/FrancesCoronel/apprenticeships/issues/new/choose) - any little bit of help counts! 😊

## Guidelines

### Text

- Proofread your text before opening a PR. Your editor's spell check is plenty.
- Make sure your text editor is set to remove trailing whitespace

### Links

- The link should not be to a direct link to the application page unless that's all that is available
- The link should link to the page describing the apprenticeship program or the closest thing to that

### Images

- The featured image should include the company's logo and be 1000px in width and 500px in height
- Please avoid any images that focus on individuals and show faces since this can bias users
- You don't have to worry about compressing or optimizing your image, we use [ImgBot](https://github.com/apps/imgbot) to do that but we recommend keeping all images under 250 KB

### Locations

- If it's not clear what the locations are, don't include any
- If there are more than 10 locations where the apprenticeship is, the location be indicated as "Multiple Locations"

## Local Development

> Install dependencies

`npm ci`

> Start local environment

`npm run dev`

## Adding a new apprenticeship

> Add new Markdown file in `content/apprenticeships`

```markdown
---
company: "Company or Organization Name"
description: "1 to 2 sentence description about apprenticeship by this company or organization."
image: "company-name.jpeg"
link: "https://company-website.com"
location:
  - "London, UK"
  - "San Francisco, CA"
  - "City, State"
  - "City, Country"
---
```

> Add the image referenced above to `public/images/apprenticeships`

`company-name.jpg`

## Making a Pull Request

- The pull request should have a useful title, like `Add [name of apprenticeship]` instead of `Update README`
- Search previous suggestions before making a new one, as yours may be a duplicate
- Make an individual pull request for each suggestion
