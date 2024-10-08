<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">User API Test / PEVN STACK </h1>

    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Add New User</h2>
          <form @submit.prevent="addUser" class="max-w-sm">
            <input v-model="newUser.username" placeholder="Username" required class="input-field">
            <input v-model="newUser.email" type="email" placeholder="Email" required class="input-field">
            <input v-model="newUser.password" type="password" placeholder="Password" required class="input-field">
            <button type="submit" class="btn-primary">Add User</button>
          </form>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Update User</h2>
          <form @submit.prevent="updateUser" class="max-w-sm">
            <input v-model="updateUserData.id" type="number" placeholder="User ID" required class="input-field">
            <input v-model="updateUserData.username" placeholder="New Username" class="input-field">
            <input v-model="updateUserData.email" type="email" placeholder="New Email" class="input-field">
            <input v-model="updateUserData.password" type="password" placeholder="New Password (if changing)" class="input-field">
            <button type="submit" class="btn-primary">Update User</button>
          </form>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Delete User</h2>
          <form @submit.prevent="deleteUser" class="max-w-sm">
            <input v-model="deleteUserId" type="number" placeholder="User ID to delete" required class="input-field">
            <button type="submit" class="btn-primary">Delete User</button>
          </form>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-4">
        <h2 class="text-2xl font-semibold mb-4">View Users</h2>
        <button @click="getUsers" class="btn-primary">View All Users</button>
        <div v-if="users.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">User List:</h3>
          <p v-for="user in users" :key="user.id" class="mb-2">
            ID: {{ user.id }}, Username: {{ user.username }}, Email: {{ user.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([])
const newUser = ref({
  username: '',
  email: '',
  password: ''
})

const updateUserData = ref({
  id: '',
  username: '',
  email: '',
  password: ''
})

const deleteUserId = ref('')

async function getUsers() {
  try {
    const { data } = await useFetch('http://localhost:5000/users')
    users.value = data.value
  } catch (error) {
    console.error('Error fetching users:', error)
    alert('Error fetching users')
  }
}

async function addUser() {
  try {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser.value)
    })
    if (response.ok) {
      alert('User added successfully')
      newUser.value = { username: '', email: '', password: '' }
      await getUsers() // Refresh user list
    } else {
      throw new Error('Error adding user')
    }
  } catch (error) {
    console.error('Error adding user:', error)
    alert('Error adding user')
  }
}

async function updateUser() {
  try {
    const updateData = {}
    if (updateUserData.value.username) updateData.username = updateUserData.value.username
    if (updateUserData.value.email) updateData.email = updateUserData.value.email
    if (updateUserData.value.password) updateData.password = updateUserData.value.password

    if (Object.keys(updateData).length === 0) {
      alert('Please enter data to update')
      return
    }

    console.log('Data to update:', updateData)

    const response = await fetch(`http://localhost:5000/users/${updateUserData.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Response error:', errorText)
      throw new Error(`Error updating user: ${response.status} - ${errorText}`)
    }

    const result = await response.json()
    console.log('Update successful:', result)

    alert('User updated successfully')
    updateUserData.value = { id: '', username: '', email: '', password: '' }
    await getUsers()
  } catch (error) {
    console.error('Error updating user:', error)
    alert(error.message || 'Error updating user')
  }
}

async function deleteUser() {
  if (!confirm('Are you sure you want to delete this user?')) {
    return
  }
  try {
    const response = await fetch(`http://localhost:5000/users/${deleteUserId.value}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      alert('User deleted successfully')
      deleteUserId.value = ''
      await getUsers() // Refresh user list
    } else {
      throw new Error('Error deleting user')
    }
  } catch (error) {
    console.error('Error deleting user:', error)
    alert('Error deleting user')
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300;
  }
  .input-field {
    @apply w-full mb-4 p-2 border-2 border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-200;
  }
}
</style>