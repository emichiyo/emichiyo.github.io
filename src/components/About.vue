<template>
    <div class="page-box">
        <h1>About</h1>    
        <p>Hello!</p>
        <p>
            We can put this type augmentation in a .ts file, or in a project-wide *.d.ts file. Either way, make sure it is included in tsconfig.json. For library / plugin authors, this file should be specified in the types property in package.json.

            <br/>

            In order to take advantage of module augmentation, you will need to ensure the augmentation is placed in a TypeScript module. That is to say, the file needs to contain at least one top-level import or export, even if it is just export {}. If the augmentation is placed outside of a module, it will overwrite the original types rather than augmenting them!
        </p> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'About'
});
</script>

<style>
.page-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>