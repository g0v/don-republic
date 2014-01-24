(function(){
  ({
    edemocracy: {
      users: {
        etblue: {
          name: "ETBlue",
          pins: {
            issues: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }
            ],
            proposals: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }
            ],
            projects: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }
            ],
            tags: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }, {
                id: '4',
                position: 4
              }, {
                id: '5',
                position: 5
              }
            ],
            circles: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }
            ],
            groups: [
              {
                id: '1',
                position: 1
              }, {
                id: '2',
                position: 2
              }, {
                id: '3',
                position: 3
              }
            ]
          },
          subscribtions: {
            issues: ['1', '2', '3'],
            proposals: ['1', '2', '3'],
            projects: ['1', '2', '3'],
            tags: ['1', '2', '3'],
            circles: ['1', '2', '3'],
            groups: ['1', '2', '3']
          },
          bookmarks: {
            issues: ['1', '2', '3'],
            proposals: ['1', '2', '3'],
            projects: ['1', '2', '3'],
            tags: ['1', '2', '3'],
            circles: ['1', '2', '3'],
            groups: ['1', '2', '3']
          },
          sharings: {
            issues: ['1', '2', '3'],
            proposals: ['1', '2', '3'],
            projects: ['1', '2', '3'],
            tags: ['1', '2', '3'],
            circles: ['1', '2', '3'],
            groups: ['1', '2', '3']
          },
          circles: {
            c1: {
              name: "宅圈",
              users: ['clkao', 'ipa', 'tkirby', 'yhsiang', 'jedi']
            },
            c2: {
              name: "魔法圈",
              users: ['au', 'soidid']
            },
            c3: {
              name: "社運圈",
              users: 'ttcat'
            },
            c4: {
              name: "醫療圈",
              users: 'pofeng'
            },
            c5: {
              name: "同學",
              users: 'lina'
            },
            c6: {
              name: "家人",
              users: 'tkalu'
            }
          }
        }
      },
      badges: {
        b1: {
          name: "problem digger",
          description: "",
          gold: "#",
          silver: "#",
          brown: "#"
        },
        b2: {
          name: "question answerer"
        },
        b3: {
          name: "lazypack maker"
        }
      },
      pads: "",
      issues: {
        i1: {
          name: "兩岸服務貿易協議",
          url: '#',
          parent: '?',
          children: '?'
        },
        i2: {
          name: "核能發電"
        },
        i3: {
          name: "土地徵收"
        },
        i4: {
          name: "都市更新"
        },
        i5: {
          name: "關廠工人"
        }
      },
      proposals: {
        p1: {
          id: 1,
          name: "政府IT委外採用open source模式建議案",
          meta: {
            parents: "",
            children: "",
            tags: "",
            users: {
              subscribed: ["etblue", "tkirby"],
              bookmarked: "hychen",
              shared: "clkao"
            },
            owners: {
              users: "clkao",
              groups: "g0v"
            },
            managers: {
              users: "hychen",
              groups: "g0v"
            },
            members: {
              users: "tkirby",
              groups: "level1"
            }
          },
          content: {
            intro: "#",
            plans: {
              p1: {
                id: 1,
                content: [['1', '2', '3'], '4', '5']
              }
            },
            analysis: {
              visions: {
                v1: {
                  id: 1,
                  problems: ['1', '2'],
                  content: "假文假文",
                  reference: "#",
                  author: "clkao",
                  history: {
                    created: "2013-01-02",
                    edited: "2013-01-02"
                  }
                },
                v2: {
                  id: 2,
                  problems: ['2', '3'],
                  content: "假文假文",
                  reference: "#",
                  author: "clkao",
                  history: {
                    created: "2013-01-02",
                    edited: "2013-01-02"
                  }
                }
              },
              problems: {
                p1: {
                  id: 1,
                  vision: '1',
                  reasons: ['1', '2'],
                  content: "假文假文",
                  reference: "#",
                  author: "clkao",
                  history: {
                    created: "2013-01-02",
                    edited: "2013-01-02"
                  }
                }
              },
              reasons: {
                r1: {
                  id: 1,
                  problem: '1',
                  solutions: ['1', '2'],
                  content: "假文假文",
                  reference: "#",
                  author: "clkao",
                  history: {
                    created: "2013-01-02",
                    edited: "2013-01-02"
                  }
                }
              },
              solutions: {
                s1: {
                  id: 1,
                  reason: '1',
                  stakeholders: {
                    positive: '1',
                    negative: '2'
                  },
                  content: "假文假文",
                  reference: "#",
                  author: "clkao",
                  history: {
                    created: "2013-01-02",
                    edited: "2013-01-02"
                  }
                }
              },
              stakeholders: {
                s1: {
                  id: 1,
                  solution: '1',
                  subject: '1',
                  relation: "positive",
                  description: "",
                  reference: "#",
                  author: "hychen",
                  history: {
                    created: "2013-01-01",
                    edited: "2013-01-02"
                  }
                }
              }
            }
          }
        },
        p2: {
          id: 1,
          name: "都市更新條例修正案"
        },
        p3: {
          id: 1,
          name: "土地徵收條例修正案"
        },
        p4: {
          id: 1,
          name: "綠色能源政策規劃案"
        }
      },
      projects: {
        p1: {
          name: "反黑箱服貿行動串連",
          url: '#',
          parent: '?',
          children: '?'
        },
        p2: {
          name: "動民主系統開發",
          url: '#',
          parent: '?',
          children: '?'
        },
        p3: {
          name: "反核四五六行動串連",
          url: '#',
          parent: '?',
          children: '?'
        }
      },
      tags: {
        t1: {
          name: "open data",
          url: '#',
          parent: '?',
          children: '?'
        },
        t2: {
          name: "醫療",
          url: '#',
          parent: '?',
          children: '?'
        },
        t3: {
          name: "兒童",
          url: '#',
          parent: '?',
          children: '?'
        },
        t4: {
          name: "原住民",
          url: '#',
          parent: '?',
          children: '?'
        },
        t5: {
          name: "台中市",
          url: '#',
          parent: '?',
          children: '?'
        },
        t6: {
          name: "民主",
          url: '#',
          parent: '?',
          children: '?'
        }
      },
      groups: {
        g1: {
          name: "零時政府",
          url: '#',
          parent: '?',
          children: '?'
        },
        g2: {
          name: "綠黨",
          url: '#',
          parent: '?',
          children: '?'
        },
        g3: {
          name: "醫勞盟",
          url: '#',
          parent: '?',
          children: '?'
        },
        g4: {
          name: "民主陣線",
          url: '#',
          parent: '?',
          children: '?'
        }
      }
    }
  });
}).call(this);
