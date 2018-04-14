<template>
<div>
  id:{{ $route.params.id }}
</div>
</template>

<script>
export default {
  layout: "article_layout",
  validate({ params, query, store }) {
    return true;
  }
};
</script>
