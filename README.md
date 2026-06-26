# Event Organizer Handbook

A practical guide for organizing tech meetups and community events, built from thoughtbot's experience running RubyMX, a Ruby meetup in Guadalajara, Mexico.

Live site: https://thoughtbot.github.io/event_organizer_handbook

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [About thoughtbot](#about-thoughtbot)

## Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - `>= 3.1`
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
  - `gem install bridgetown -N`
- [Node](https://nodejs.org)
  - `>= 20`

## Install

```sh
cd event-organizer-handbook
bundle install && npm install
```

> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

### Commands

```sh
# running locally
bin/bridgetown start

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the
`.github/workflows/gh-pages.yml` workflow. No manual deployment is needed.

## Contributing

We welcome contributions! This handbook is open source, but content changes
should align with the editorial guidelines and maintainers have final say over
what is merged.

1. Fork it
2. Clone the fork using `git clone` to your local development machine.
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

## License

The handbook content is licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The code in
this repository is licensed under the [MIT License](LICENSE.md).

Built with [Bridgetown](https://www.bridgetownrb.com/), a Ruby-powered static
site generator.

## About thoughtbot

![thoughtbot](https://thoughtbot.com/thoughtbot-logo-for-readmes.svg)

This repo is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community].
We are [available for hire][hire].

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github
