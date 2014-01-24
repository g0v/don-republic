module.exports =
  p1:
    id: 1
    name: "政府IT委外採用open source模式建議案"
    meta:
      parents:
        * "" # 提案編號
      children:
        * "" # 提案編號
      tags:
        * "" # 標籤編號
      users:
        subscribed:
          * "etblue"
          * "tkirby"
        bookmarked:
          * "hychen"
        shared:
          * "clkao"
      owners:
        users:
          * "clkao"
        groups:
          * "g0v"
      managers:
        users:
          * "hychen"
        groups:
          * "g0v"
      members:
        users:
          * "tkirby"
        groups:
          * "level1" # all level 1+ users by default
    content:
      intro: "#" # firepad
      plans:
        p1:
          id: 1
          content: # firepads
            * \1
              * \2
              * \3
            * \4
            * \5
      analysis:
        visions:
          v1:
            id: 1
            problems:
              * \1
              * \2
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited:
                * "2013-01-02"
          v2:
            id: 2
            problems:
              * \2
              * \3
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited:
                * "2013-01-02"
        problems:
          p1:
            id: 1
            vision: \1
            reasons:
              * \1
              * \2
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited:
                * "2013-01-02"
        reasons:
          r1:
            id: 1
            problem: \1
            solutions:
              * \1
              * \2
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited:
                * "2013-01-02"
        solutions:
          s1:
            id: 1
            reason: \1
            stakeholders: # 利害關係人便利貼們
              positive:
                * \1
              negative:
                * \2
            content: "假文假文"
            reference: "#"
            author: "clkao"
            history:
              created: "2013-01-02"
              edited:
                * "2013-01-02"
        stakeholders:
          s1: # 便利貼
            id: 1
            solution: \1 # solution 便利貼編號
            subject: \1 # global 標籤 t 編號
            relation: "positive" # 受益者或受害者
            description: "" # 受益/受害原因
            reference: "#" # 參考資料
            author: "hychen"
            history:
              created: "2013-01-01"
              edited:
                * "2013-01-02"
  p2:
    id: 1
    name: "都市更新條例修正案"
  p3:
    id: 1
    name: "土地徵收條例修正案"
  p4:
    id: 1
    name: "綠色能源政策規劃案"
