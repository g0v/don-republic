angular.module 'main', <[firebase]>
.directive \contenteditable, ->
  require: \ngModel
  scope: ngModel: \=
  link: (scope, e, attrs, ctrl) ->
    e.on \keyup, -> scope.$apply -> scope.ng-model = e.html!
    scope.$watch 'ngModel', -> e.html scope.ng-model
.directive \chooser, (DataService, $timeout) ->
  require: \ngModel
  scope: ngModel: \=
  restrict: \E,
  replace: false,
  template: "<input ng-model='keyword'/>" +
            "<div ng-repeat='g in result' class='group'>" +
            "<div ng-repeat='i in g.list' class='item' ng-click='choose(g,i)'>" +
            "<div class='type'>{{i.type}}</div><div class='name'>{{g.name}}</div>" +
            "</div></div>"
  transclude: true
  link: (scope, e, attrs, ctrl) ->
    scope.data = DataService.name.ref
    scope.ngModel = {}
    scope.choose = (g,i)-> scope.ngModel <<< {t:i.type,id:i.id,v:DataService[i.type]ref[i.id]}
    search = ->
      scope.result = if !scope.keyword => [] else [k for k of scope.data.n]filter(->it.indexOf(scope.keyword)>=0)map ->
        DataService.name.prune it
        {name: it, list: scope.data.n[it]}
      scope.handle = null
    scope.$watch "keyword", (v) ->
      if scope.handle => $timeout.cancel scope.handle
      scope.handle = $timeout search, 350

.filter \type, -> (d, type) -> (d or [])filter(-> it.t == type)
.filter \value, (DataService) -> (d) -> (d or [])map -> it <<<{v:DataService[it.t]ref[it.id]}
.filter \picked, (DataService) ->
  (d=[], p={}, picked=true) ->
    stand = p.{}stand.[][(DataService.user or {})id]
    d.filter(-> !picked xor (it.id in stand))sort (a,b) -> stand.indexOf(a) - stand.indexOf(b)
.factory \DataService, ($firebase) ->
  ret = {}
  ret.user = null
  ret.db-ref = new Firebase \https://don.firebaseio.com
  ret.firebase = $firebase ret.db-ref
  ret.auth = new FirebaseSimpleLogin ret.db-ref, (e,u) ->
    ret.user = u
    for f in ret.handle[\user.changed] => f u
  ret.handle = {}
  ret.on = (n,f) -> ret.handle.[][n].push f

  # a and b: {t: \type, id: \id}
  ret.link = (cat, a, b, dir, name=null) ->
    ls = [a,b]map -> it.v.{}link.[][cat]
    lk = [b,a]map -> {} <<< it{id,t} <<< {d: -dir * (2 * &1 - 1)}
    ls.map (n,i)-> if n.filter((m) -> <[t id d n]>map(-> m[it]==lk[i][it])filter(->!it)length==0)length==0 => n.push lk[i]
    [a,b]map (it,i) ->
      if not ret[it.t]ref[it.id] => ret[it.t]ref[it.id] = it.v
      else ret[it.t]ref[it.id].{}link[cat] = ls[i]
    [a,b]map -> ret[it.t]ref.$save!

  ret.name = do
    ref: $firebase new Firebase \https://don.firebaseio.com/name
    add: (n, type, id, field) ->
      if @ref.{}n.[][n]filter(-> it.type==type and it.id==id)length => return
      @ref.n.[][n]push {type,id,field}
      if not (type of @ref.{}t) => @ref.t[type] = 1
      @ref.$save!
    prune: (n) ->
      @ref.n[n] = @ref.n.[][n]map(->
        try if ret[it.type]ref[it.id][it.field]!=n => throw \changed
        catch => it.id = null
        it
      )filter -> it and it.id
      @ref.$save!

  base = (name) -> do
    ref: $firebase new Firebase "https://don.firebaseio.com/#{name}"
    create: ->
      n = @ref.$add(it <<< {creator: {}<<<(ret.user or {id:0,username:\anonymous,displayName:\anonymous}){id,username,displayName}, create_time: new Date!getTime!, edit_time: new Date!getTime!})
      it.id = n.name!
      @ref.$child it.id .$set it
      ret.name.add it.name, name, it.id, \name
      it

    factory: -> {}

  ret.user = base \user
  ret.group = base \group
  ret.proposal = base \proposal
  ret.plan = base \plan
  ret.comment = base \comment
  ret.vision = base \vision
  ret.issue = base \issue
  ret.cause = base \cause
  ret.solution = base \solution

  ret

ctrl = {}
ctrl.main = ($scope, DataService) ->
  DataService.on \user.changed, (u) -> $scope.$apply -> $scope.user = u
  $scope.tab = 1
  $scope.active = (a,b) -> if a==b => \active else ""

ctrl.user = ($scope,DataService) ->
  $scope <<< ctrl.base $scope, DataService, \user
  $scope <<<
    login: -> DataService.auth.login \facebook
    logout: -> DataService.auth.logout \facebook
  DataService.on \user.changed, (u) ->
    $scope.$apply -> $scope.cur = u

ctrl.name = ($scope, $timeout, DataService) ->
  $scope.data = DataService.name.ref
  $scope.handle = null
  $scope.keyword = ""
  search = ->
    $scope.result = [k for k of $scope.data.n]filter(->it.indexOf($scope.keyword)>=0)map ->
      DataService.name.prune it
      {name: it, list: $scope.data.n[it]}
    $scope.handle = null

  $scope.$watch "keyword", ->
    if $scope.handle => $timeout.cancel $scope.handle
    $scope.handle = $timeout search, 500


ctrl.base = ($scope, DS, ctrl-name) -> do
  create: (t,k,p) ->
    if !$scope.cur.name.trim! => return null
    ret = DS[ctrl-name]create $scope.cur
    $scope.cur = DS[ctrl-name]factory!
    ret
  create-with: (cat, type, id, ref) ->
    if not (item = $scope.create!) => return null
    DS.link cat, {id,t:type,v:ref}, {t:ctrl-name,id:item.id,v:item}, 1
    item
  link: (cat, a, type, id, ref, dir=1) ->
    DS.link cat, {id:a,t:ctrl-name,v:@get(ctrl-name, a)}, {t:type,id:id,v:ref}, dir
  delete: (key) ->
    if (!DS.user and DS[ctrl-name]ref[key]creator) or (DS.user and DS.user.id != DS[ctrl-name]ref[key].{}creator.id) => return
    types = {}
    for cat,links of DS[ctrl-name]ref[key]link
      for des in links
        obj = @get(des.t, des.id)
        ret = obj.link[cat]map((d,i) -> if d.id==key => null else d)filter(->it)
        if ret.length != obj.link[cat] =>
          obj.link[cat] = ret
          types[des.t] = 1
    DS[ctrl-name]ref.$remove(key)
    for it of types => if it!=ctrl-name => DS[it]ref.$save!
  get: (type, id) -> DS[type]ref[id] or {}
  vote: (p,d) ->
    #if not (id = if DS.user => that.id) => return
    id = if DS.user => that.id else 0
    if !p.{}config.allow-anonymous and !id => return
    if id in (p.{}vote[d] or []) => p.vote[d]splice p.vote[d]indexOf(id), 1
    else if id in ((for it in [0 1 2]=>p.{}vote[it] or [])reduce (-> &0 ++ &1),[]) => return
    else p.{}vote.[][d].push id
    DS[ctrl-name]ref.$save!
  admin: (g, u, lv=1) ->
    if u in g.admin => delete g.admin
    else g.admin[u] = lv
    $scope.list.$save!
  save: (k) ->
    (DS[ctrl-name]ref[k] or {}) <<< {edit_time: new Date!getTime!}
    DS[ctrl-name]ref.$save!
  list: DS[ctrl-name]ref
  links: (p, cat, type=null) ->
    ret = p.{}link[cat] or []
    if type => ret = ret.filter -> it.t == type
    ret.map ~> @get it.t, it.id
  cur: DS[ctrl-name]factory!
  picked: (p={}, picked=true) ->
    stand = p.{}stand.[][(DS.user or {})id]
    p.{}link.[]['choice']filter(-> !picked xor (it.id in stand))sort (a,b) -> stand.indexOf(a) - stand.indexOf(b)
  pick: (p,k) ->
    user = DS.user or {}
    p.{}config.{}vote
    if not (p.config.allow-anonymous or user.id) => return
    obj = p.{}stand.[][user.id]
    if k in obj => obj.splice obj.indexOf(k), 1 else =>
      if p.config.method == \1 and obj.length > 0 => obj.pop!
      obj.push k
    DS[ctrl-name]ref.$save p.id
  is-picked: (p, k) -> $scope.picked(p,true)map(->it.id)filter(->it==k)length>0
  choice-state: (p) ->
    d = {}
    if not p => return {max: 0, d: {}}
    p.{}link.[]['choice']map -> d[it.id] = {r:it, c: 0}
    [v for ,v of p.stand]map -> it.map -> if d[it] => d[it]c += 1
    max = d3.max [k for k of d]map -> d[it]c
    {max, d}

ctrl.group = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \group
  $scope.add-member = (g) ->
    g.{}users[g.new-member] = 1
    g.new-member = ""
    $scope.list.$save!

ctrl.proposal = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \proposal
  $scope._create = $scope.create
  $scope.create = ->
    if $scope.cur.start => $scope.cur.start = new Date($scope.cur.start)getTime!
    if $scope.cur.start and ($scope.cur.{}duration.day or $scope.cur.duration.hour or $scope.cur.duration.min) =>
      v = ~~($scope.cur.duration.day or 0) * 86400 +
          ~~($scope.cur.duration.hour or 0) * 3600 +
          ~~($scope.cur.duration.min or 0) * 60
      $scope.cur.end = new Date(new Date($scope.cur.start)getTime! + new Date(v*1000)getTime!)getTime!
    $scope._create!

ctrl.plan = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \plan

ctrl.comment = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \comment

ctrl.vision = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \vision

ctrl.issue = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \issue

ctrl.cause = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \cause

ctrl.solution = ($scope, DataService) ->
  $scope <<< ctrl.base $scope, DataService, \solution
