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
- 👥 Add yourself as a contributor under credits
- 🔧 Make a pull request [here](https://github.com/FrancesCoronel/apprenticeships/compare)
- 🎉 Get your pull request approved - success!

## Ways You Can Contribute

- [Add apprenticeship](https://github.com/FrancesCoronel/apprenticeships.me/issues/new?assignees=&labels=addition&template=add-apprenticeship.md&title=Add%3A+) - Add an apprenticeship to our growing list 🌱
- [Bug Report](https://github.com/FrancesCoronel/apprenticeships.me/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+) - Create a bug report to help us improve this website 🐛
- [Edit apprenticeship](https://github.com/FrancesCoronel/apprenticeships.me/issues/new?assignees=&labels=edit&template=edit-apprenticeship.md&title=Edit%3A+) - Edit an existing apprenticeship 📝
- [Feature Request](https://github.com/FrancesCoronel/apprenticeships.me/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature+Request%3A+) - Suggest an idea for this project 💡
- [Remove apprenticeship](https://github.com/FrancesCoronel/apprenticeships.me/issues/new?assignees=&labels=remove&template=remove-apprenticeship.md&title=Remove%3A+) - Remove an existing apprenticeship 🔻
- Or just [create a regular issue](https://github.com/FrancesCoronel/apprenticeships/issues/new/choose) - any little bit of help counts! 😊

## Guidelines

### Text

- Check your spelling and grammar using a tool like [Grammarly](https://grammarly.com)
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

`npm install`

> Start local environment

`npm start`

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

> Add image referenced to "static/images/apprenticeships"

`company-name.jpg`

## Making a Pull Request

- The pull request should have a useful title, like `Add [name of apprenticeship]` instead of `Update README`
- Search previous suggestions before making a new one, as yours may be a duplicate
- Make an individual pull request for each suggestion
