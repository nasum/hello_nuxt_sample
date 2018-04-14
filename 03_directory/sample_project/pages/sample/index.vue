<template>
  <section>
    <h1>sample</h1>
    {{ title }}
  </section>
</template>

<script>
// async function fn() {
//   return {
//     title: "sample_text"
//   };
// }

export default {
  asyncData(context) {
    console.log(context);
    return new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      return {
        title: "sample_text"
      };
    });
  },
  // async asyncData(params) {
  //   const result = await fn();
  //   return result;
  // }
  // asyncData({ params }, callback) {
  //   fn().then(res => {
  //     callback(null, { title: res.title });
  //   });
  // },
  validate({ params, query, store }) {
    console.log("###params###");
    console.log(params);
    console.log("###query###");
    console.log(query);
    console.log("###store###");
    console.log(store);
    return true;
  }
};
</script>

