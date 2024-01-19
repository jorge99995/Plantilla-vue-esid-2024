<template lang="">
    <div class="main-wrapper">
        <Navbar></Navbar>
        <Aside></Aside>
        <div class="page-wrapper">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import Aside from "./Plantilla/Aside.vue";
import Navbar from "./Plantilla/Navbar.vue";

components: {
    Aside;
    Navbar;
}
</script>
