<template>
  <form v-on:submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="number" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
    emits: ["add-contact"],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    methods: {
        submitData() {
            this.$emit("add-contact",
                this.enteredName,
                this.enteredEmail,
                this.enteredPhone,
            );
        },
    },
}
</script>
