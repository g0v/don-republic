module.exports =
  etblue:
    name: "ETBlue"
    pins:
      issues:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
      proposals:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
      projects:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
      tags:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
        * id: \4
          position: 4
        * id: \5
          position: 5
      circles:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
      groups:
        * id: \1
          position: 1
        * id: \2
          position: 2
        * id: \3
          position: 3
    subscribtions:
      issues: <[ 1 2 ]>
      proposals: <[ 1 ]>
      projects: <[ 1 ]>
      tags: <[ 3 ]>
      circles: <[ 1 ]>
      groups: <[ 2 ]>
    bookmarks:
      issues: <[ 1 ]>
      proposals: <[ 2 ]>
      projects: <[ 3 ]>
      tags: <[ 2 ]>
      circles: <[ 1 ]>
      groups: <[ 2 ]>
    sharings:
      issues: <[ 1 ]>
      proposals: <[ 2 ]>
      projects: <[ 3 ]>
      tags: <[ 2 ]>
      circles: <[ 1 ]>
      groups: <[ 2 ]>
    circles:
      1:
        name: "宅圈"
        users: <[ clkao ipa tkirby yhsiang jedi ]>
      2:
        name: "魔法圈"
        users: <[ au soidid ]>
      3:
        name: "社運圈"
        users: <[ ttcat ]>
      4:
        name: "醫療圈"
        users: <[ pofeng ]>
      5:
        name: "同學"
        users: <[ lina ]>
      6:
        name: "家人"
        users: <[ tkalu ]>
    activities:
      1:
        action: "new"
        type: "vision"
        target:
          proposal: "1"
          vision: "3"
        timestamp: "20140101"
      2:
        action: "new"
        type: "plan"
        target:
          proposal: "2"
          plan: "1"
        timestamp: "20140101"
      3:
        action: "new"
        type: "chapter"
        target:
          proposal: "2"
          plan: "1"
          chapter: "1"
        timestamp: "20140101"
