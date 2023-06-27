function browserHistory(browserInfo, array) {

  for (const info of array) {
    let [command, webPage] = info.split(" ");

    if (command === "Open") {
      browserInfo["Open Tabs"].push(webPage);
      browserInfo['Browser Logs'].push(info);

    } else if (command === "Close") {
      const index = browserInfo['Open Tabs'].indexOf(webPage);

      if (index > -1) {
        // only splice array when item is found
        browserInfo['Recently Closed'].push(webPage);
        browserInfo['Browser Logs'].push(info);
        browserInfo['Open Tabs'].splice(index, 1); // 2nd parameter means remove one item only
        
      }
    }

    else if(command === 'Clear'){
        browserInfo['Open Tabs'] = [];
        browserInfo['Recently Closed'] = [];
        browserInfo['Browser Logs'] = [];
    }

  }

  console.log(browserInfo['Browser Name']);
  console.log(`Open Tabs: ${browserInfo['Open Tabs'].join(", ")}`);
  console.log(`Recently Closed: ${browserInfo['Recently Closed'].join(", ")}`);
  console.log(`Browser Logs: ${browserInfo['Browser Logs'].join(", ")}`);
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
