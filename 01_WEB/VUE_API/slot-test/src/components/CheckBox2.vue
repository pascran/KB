<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })"
    />
    <!-- 부모가 전달한 템플릿 -->
    <slot>Item</slot>
  </div>
</template>
<script>
export default {
  name: 'CheckBox2',
  props: ['id', 'checked'],
};
</script>
