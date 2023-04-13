<script setup>

/* PROVA CON COMPOSITION API */

import { onMounted, ref } from 'vue';
import { store } from '../store';

//Data
let storeLocal = ref(store);
let dropdown = ref(null);

//Methods
function toggleChat() {

    const classes = dropdown.value.classList;

    if (classes.contains('shown')) {
        dropdown.value.classList.remove('shown');
    } else {
        dropdown.value.classList.add('shown');
    }


}

</script>

<template>
    <div class="chat-icon">
        <button class="btn-rounded btn-rounded-cardinal border-0" @click="toggleChat()">
            <i class="fa-solid fa-message"></i>
        </button>
        <div class="dropdown" ref="dropdown">
            <div class="dropdown-header">
                <i class="fa-solid fa-robot me-2"></i>
                <h6 class="d-inline">Avada ChatBot</h6>
                <button class="close-btn" @click="toggleChat()">
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>
            <div class="dropdown-body">
                <ul>
                    <li>
                        Ciao! 🤖
                    </li>
                    <li>
                        Se hai bisogno di aiuto con il tuo ordine, non esitare a scrivermi!
                    </li>
                </ul>
            </div>
            <div class="dropdown-footer">
                <input type="text" class="small-control chat-footer-text" name="" id="">
                <button class="btn-textual chat-footer-send">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
</template>