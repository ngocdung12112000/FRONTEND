<!-- eslint-disable prettier/prettier -->
<template>
    <div class="my-modal">
        <div class='container'>
            <div class='loader'>
                <div class='loader--dot'></div>
                <div class='loader--dot'></div>
                <div class='loader--dot'></div>
                <div class='loader--dot'></div>
                <div class='loader--dot'></div>
                <div class='loader--dot'></div>
                <div class='loader--text'></div>
            </div>
        </div>
    </div>

</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.my-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Helvetica;
    z-index: 999;
}

.loader {
    height: 20px;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.loader--dot {
    animation-name: loader;
    animation-timing-function: ease-in-out;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-color: black;
    position: absolute;
    border: 2px solid white;
}

.loader--dot:first-child {
    background-color: #8cc759;
    animation-delay: 0.5s;
}

.loader--dot:nth-child(2) {
    background-color: #8c6daf;
    animation-delay: 0.4s;
}

.loader--dot:nth-child(3) {
    background-color: #ef5d74;
    animation-delay: 0.3s;
}

.loader--dot:nth-child(4) {
    background-color: #f9a74b;
    animation-delay: 0.2s;
}

.loader--dot:nth-child(5) {
    background-color: #60beeb;
    animation-delay: 0.1s;
}

.loader--dot:nth-child(6) {
    background-color: #fbef5a;
    animation-delay: 0s;
}

.loader--text {
    position: absolute;
    top: 200%;
    left: 0;
    right: 0;
    width: 4rem;
    margin: auto;
    font-size: 25px;
}

.loader--text:after {
    content: "Loading";
    font-weight: bold;
    animation-name: loading-text;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

@keyframes loader {
    15% {
        transform: translateX(0);
    }

    45% {
        transform: translateX(230px);
    }

    65% {
        transform: translateX(230px);
    }

    95% {
        transform: translateX(0);
    }
}

@keyframes loading-text {
    0% {
        content: "Loading";
    }

    25% {
        content: "Loading.";
    }

    50% {
        content: "Loading..";
    }

    75% {
        content: "Loading...";
    }
}
</style>