<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My Blog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" href="#">About Us</router-link>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" href="#">Tech</a>
                </li>
                <li class="nav-item">
                    <router-link to="/life"  class="nav-link" href="#">LifeStyle</router-link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
</style>
