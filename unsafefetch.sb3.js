class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
            }
          }
        }
      ]
    };
  }

  get (args) {
    return fetch(args.URL, {referrerPolicy: "unsafe-url"})
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new Fetch());
