module.exports = [
  // { path: '/', component: require('./components/HomeComponent.vue') },
  { path: '/material', component: require('./components/Material.vue') },
  { path: '/material/game/:id', component: require('./components/Game/GameComponent.vue') },
  { path: '/courses/:course/material/game/:id', component: require('./components/Game/GameComponent.vue') },
  { path: '/courses/', component: require('./components/Courses.vue') },
  { path: '/courses/create', component: require('./components/Courses/Create.vue') },
  { path: '/courses/:id', component: require('./components/Courses/Associate.vue') },
  { path: '/courses/item', component: require('./components/Courses/CourseMainComponent.vue') },
  { path: '/courses/graph/:id', component: require('./components/Courses/CourseGraphComponent.vue') },
  // { path: '/teach/', component: require('./components/Test.vue') },
  { path: '/classroom/', component: require('./components/Classroom.vue') },
  { path: '/classroom/:id', component: require('./components/Router.vue'),
    children: [
      {path: '', component: require('./components/Classroom/Index')},
      {path: ':post', component: require('./components/Classroom/PostView')}
    ]
  },
  { path: '/learn/', component: require('./components/LearnComponent.vue') },
  { path: '/blockly/', component: require('./components/BlocklyComponent.vue') },
  { path: '/me/', component: require('./components/Me.vue') },
  { path: '/user/:id', component: require('./components/User.vue') },
  { path: '/material/create', component: require('./components/Form/CreateLesson.vue') },
  { path: '/material/topic', component: require('./components/Form/CreateTopic.vue') },
  { path: '/material/concept', component: require('./components/Form/CreateConcept.vue') },
  { path: '*', redirect: '/material/' }
]
