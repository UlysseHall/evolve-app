import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Patient from './pages/Patient';
import PatientProfile from './pages/PatientProfile';
import PatientSession from './pages/PatientSession';
import AddPatient from './pages/AddPatient';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/patient/:id', component: Patient, name: 'patient', props: true },
    { path: '/patient/:id/profile', component: PatientProfile, name: 'patientProfile', props: true },
    { path: '/patient/:id/session/:session-id', component: PatientSession, name: 'patientSession', props: true },
    { path: '/patient-new', component: AddPatient, name: 'addPatient', props: true },
  ],

  mode: 'history'
})
