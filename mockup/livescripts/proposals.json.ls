module.exports =
  1:
    name: "政府IT委外採用open source模式建議案"
    meta:
      parents: <[ 2 ]> # global id of parent proposals
      children: <[ 3 4 ]> # global id of sub proposals
      tags: <[ 1 ]> # global id of tags
      issues: <[ 1 ]> # global id of related issues
      projects: <[ 1 ]> # global id of related projects
      users:
        subscribed: <[ etblue tkirby ]>
        bookmarked: <[ hychen ]>
        shared: <[ clkao ]>
      owners: # can edit owners, managers and members
        users: <[ clkao ]>
        groups: <[ g0v ]>
      managers: # can edit managers and members
        users: <[ hychen ]>
        groups: <[ g0v ]>
      members: # can post, edit, reply... etc.
        users: <[ tkirby ]>
        groups: <[ level1 ]> # default members for all public proposals
    log:
      1:
        user: "clkao"
        activity: "1" # activity id of the user
      2:
        user: "etblue"
        activity: "1"
    content:
      intro: "1" # pad id
      plans:
        1:
          intro: "2" # pad id
          content:
            * "1" # pad id
              * "2" # nested pads 僅限三層
              * "3"
            * "4"
            * "5"
      analysis:
        visions:
          1:
            problems: <[ 1 2 ]>
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited: <[ 2013-01-02 ]>
          2:
            problems: <[ 2 3 ]>
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited: <[ 2013-01-02 ]>
        problems:
          1:
            vision: \1
            reasons: <[ 1 2 ]>
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited: <[ 2013-01-02 ]>
        reasons:
          1:
            problem: \1
            solutions: <[ 1 2 ]>
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited: <[ 2013-01-02 ]>
        solutions:
          1:
            reason: \1
            stakeholders: # 利害關係人便利貼們
              positive: <[ 1 ]>
              negative: <[ 2 ]>
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited: <[ 2013-01-02 ]>
        stakeholders:
          1: # 便利貼
            solution: \1 # solution 便利貼編號
            subject: \1 # global 標籤 t 編號
            relation: "positive" # 受益者或受害者
            description: "" # 受益/受害原因
            reference: "#" # 參考資料
            author: "hychen"
            history:
              created: "2013-01-01"
              edited: <[ 2013-01-02 ]>
  2:
    name: "都市更新條例修正案"
  3:
    name: "土地徵收條例修正案"
  4:
    name: "綠色能源政策規劃案"
