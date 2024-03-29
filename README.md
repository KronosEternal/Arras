# Arras.io Siege Gamemode

The private arras.io siege server replicated, with new mechanics, tanks, and bosses
The Server is hosted on Heroku as well as Glitch
This server can be imported to heroku as it uses `Node.js version 12.x`,`google-closure-library version: 20190909.0.0`, and
`ws version: 7.3.0`

- Tank Definitions are in `definitions.js` file
- Map data, bot amount, gamemode are in the `config.json` file
- bot names, boss names, and random chance is in `random.js`
- more stuff such as collisions, score curve, stats are in `server.js`
- `storage.md` is where unused or revised code is located
- The `package.json` has been updated for compatibility with Heroku

The current contributers are `KronosEternal/@Nyx_The_Celestial`, `TheMemeGodOfMemes/@dontknowhowtocode`, and `jbom4390/@jbom4390`

```
# Arras.io Siege Gamemode
```

# Switching to OpenShift

OpenShift, compared to Glitch, requires a lot more effort to setup. However, if your private server received a large amount of players, it may be worth it as OpenShift servers have considerably more resources than Glitch. In order to get opens GitLab

### Creating a free subscription

To get started, sign up for openshift at <https://manage.openshift.com/accounts/auth/keycloak>. Fill in your information appropriately.

...

In the mean time, you can set up GitLab

### Setting up GitLab

Register for GitLab with https://gitlab.com/users/sign_in#register-pane

After logging in, click the green New Project button on the top left, and select the Import project tab. Click Repo by URL, and paste in this link: <https://api.glitch.com/arras-template/git>, (replace arras-template with your server name) and create the repository.

After that, find the link next to where it says HTTPS, which should end with `.git`. Save the link in a text document somewhere.

Go to your Profile settings, and find Access tokens. Choose a name and select the `api` scope, and click the Create personal access token button. Save the access token in a secured place like that text document.

### Creating an OpenShift project

You wait for a box to magically appear and click Open Web Console

On the left, click the Node.js box. Click Next. Pick some uncreative names like Arras, and paste the repo's HTTPS link. Click Create.

After a bit, on the right sidebar, your project should pop up. Open it, ignore the build error (we'll fix that soon) or anything about metrics (don't always happen, not important), and go to Resource > Secrets > Create Secret.

For password or token, put your access token. Don't touch anything else, and just name and create your secret.

Go to Builds > Builds and select your build. On the top right click Action > Edit. Click advanced options in the Source Configuration, and select your newly made secret where it says Source Secret. Scroll to the bottom and save.
