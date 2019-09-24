# Kahlu

Kahlu is an open source and fully decentralized social network powered by the gab/mastodon platform. It is the new social network of Kahlu.co.

The Kahlu project is based on the Gab/[Mastodon](https://github.com/tootsuite/mastodon) project, and is licensed under the terms and conditions of AGPL-3.0. While we will be keeping this license, over time we will be keeping less and less of the original project's source code and approach.

While Gab had an idea that made improvements on Mastodon, they fail to implement the simplest of items that show they are not really interested in a fully replicatable system. 

## Project goals

1. To implement encrypted chat messages
2. Better system of groups
3. Better system of search and usability. 


## BTCPay
In order to make BTC flow work, 3 environment variables need to be set:

- `BTCPAY_LEGACY_TOKEN`: So called Legacy Tokens can be found in https://btcpay.[yourdomain].com/stores/[yourstore]/Tokens
- `BTCPAY_PUB_KEY`: Public key that is used when creating an access token or pairing https://btcpay.[yourdomain].com/stores/[yourstore]/Tokens/Create
- `BTCPAY_MERCHANT_TOKEN`: Token created for facade *merchant*

## Deployment

**Tech stack:**

- **Ruby on Rails** powers the REST API and other web pages
- **React.js** and Redux are used for the dynamic parts of the interface
- **Node.js** powers the streaming API

**Requirements:**

- **PostgreSQL** 9.5+
- **Redis**
- **Ruby** 2.4+
- **Node.js** 8+

The repository includes deployment configurations for **Docker and docker-compose**, but also a few specific platforms like **Heroku**, **Scalingo**, and **Nanobox**.


## Local development

To get started developing on kik, you will need to run a version of it locally.
The following instructions assume you are already familiar with using a terminal program.

1. Install [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) if you haven't already.
2. Clone this repository with `git clone https://github.com/datgb/kahlu.git`
3. Change into the project directory with `cd kahlu`
4. Run `vagrant up` to provision the virtual machine. This will take a while.
5. Finally, run `vagrant ssh -c "cd /vagrant && foreman start"` to start the local web server.
6. Visit http://0.0.0.0:3000 in your web browser to see kik's splash screen. If it doesn't load, or styling is missing, wait another minute and refresh the page.
7. Log in with the username `admin` and password `administrator`
8. Have fun developing on kahlu!

## License

Copyright (C) 2019 kik AI, Inc., and other contributors (see [AUTHORS.md](AUTHORS.md), forked)

Copyright (C) 2016-2019 Eugen Rochko & other kik Social contributors

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
