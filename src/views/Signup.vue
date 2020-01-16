<template>
    <div class="signup container">
        <form action="" class="card-panel" @submit.prevent="signup">
            <h2 class="center deep-purple-text">Signup</h2>
            <div class="field">
                <label for="username">User Name:</label>
                <input type="text" name="username" v-model="userName">
            </div>
            <div class="field">
                <label for="firstname">First Name:</label>
                <input type="text" name="firstname" v-model="firstName">
            </div>
            <div class="field">
                <label for="lastname">Last Name:</label>
                <input type="text" name="lastname" v-model="lastName">
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <p class="red-text center" v-if="feedback">{{ feedback }}</p>
            <div class="field center">
                <button class="btn deep-purple">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '../firebase/init'
import firebase from 'firebase'

export default {
    name: 'Signup',
    data(){
        return {
            userName: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        signup(){
            if(this.userName && this.firstName && this.lastName && this.email && this.password) {
                this.slug = slugify(this.userName, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists) {
                        this.feedback = 'This username already exists'
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(cred => {
                            ref.set({
                                userName: this.userName,
                                firstName: this.firstName,
                                lastName: this.lastName,
                                user_id: cred.user.uid
                            })
                        }).then(() => {
                            this.$router.push({ name: 'Users' })
                        })
                        .catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })
                        this.feedback = 'This username is free to use'
                    }
                })
            } else {
                this.feedback = 'You must enter an user name'
            }
        }
    }
}
</script>

<style>
    .signup {
        max-width: 400px;
        margin-top: 60px;
    }

    .signup h2 {
        font-size: 2.4em;
    }

    .signup .field {
        margin-bottom: 16px;
    }
</style>