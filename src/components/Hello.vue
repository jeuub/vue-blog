<template>
  <div>
    <p>
      <span id="one">П</span>
      <span id="two">Р</span>
      <span id="three">И</span>
      <span id="four">В</span>
      <span id="five">Е</span>
      <span id="six">Т</span>
    </p>
    <h1>ЭТО БЛОГ БИБУПА</h1>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
div {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  text-align: center;
}
p {
  color: #0017ff;
  text-align: center;
  font-family: Oswald, Arial;
  font-size: 25vmin;
  letter-spacing: 0vmin;
  text-shadow: 1vmin 2vmin black;
}
#one {
  position: relative;
}
#two {
  position: relative;
  color: #ff6b42;

  animation-delay: 1.2s;
}
#three {
  position: relative;
  color: #ffbc36;

  animation-delay: 1.2s;
}
#four {
  position: relative;

  animation-delay: 1.3s;
}
#five {
  position: relative;
  color: #ff6b42;

  animation-delay: 1.4s;
}
#six {
  position: relative;
  color: #ffbc36;

  animation-delay: 1.5s;
}
@keyframes bounce {
  0% {
    top: -5vmin;
  }
  25% {
    top: -15vmin;
  }
  50% {
    top: -10vmin;
  }
  100% {
    top: -5vmin;
  }
}
</style>
