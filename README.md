# Commandes utiles

``` bash
# installation des dépendances
npm install

# commande pour compiler l'app à la volée (à lancer en dev), l'app est dispo à localhost:8080
npm run dev

# commande pour compiler l'app finale
npm run build
```

# Routes

* **/** : home
* **/login** : login
* **/register** : register
* **/patient-new** : addPatient
* **/patient/:id** : patient
* **/patient/:id/profile** : patientProfile
* **/patient/:id/session/:session-id** : patientSession

# Vue

* Pour créer un lien vers une page : **< router-link to="/patient-new" >Ajouter un patient< /router-link >**
  (génère un < a >)
  
* Pour afficher une props ou une data : **{{ nomDeLaProp }}**

* Le lien des assets se fait de manière traditionnelle : **src="../assets/img/logo.png"**
