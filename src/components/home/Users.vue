<template>
    <div class="container users">
        <h3 class="deep-purple-text center">Home Sweet Home</h3>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '../../firebase/init'

export default {
    name: 'Users',
}
</script>

<style>
h3 {
    margin: 60px 0;
}
</style>