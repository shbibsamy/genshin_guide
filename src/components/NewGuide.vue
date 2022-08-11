<template>
    <article class="empty-guide">
        <form action="#">
            <fieldset class="guide-header">
                <h3>New guide (WIP)</h3>
                <label class="guide-title">
                    <span>Give your guide a title:</span>
                    <input type="text" class="guide-title-input" v-model="guideEntry.title">
                </label>
            </fieldset>
            <div div class="guide-body">
                <fieldset class="guide-section"> 
                    <label class="guide-image-area">
                        <span>Upload a header image for your guide</span>
                        <input type="file" accept="image/png, image/jpg, image/jpeg" name="guide-file-upload-1">
                    </label>

                    <label class="guide-textarea">
                        <span>Type the first part of your guide here:</span>
                        <textarea name="guide-contents" v-model="guideEntry.contentsA"></textarea>
                    </label>
                </fieldset> 
                <fieldset class="guide-section">
                    <label class="guide-image-area">
                        <span>Upload a second image for your guide</span>
                        <input type="file" name="guide-file-upload-2">
                    </label>

                    <label class="guide-textarea">
                        <span>Type the second part of your guide here:</span>
                        <textarea name="guide-contents" v-model="guideEntry.contentsB"></textarea>
                    </label>
                </fieldset>
                <fieldset class="guide-section">
                    <label class="guide-image-area">
                        <span>Upload a final image for your guide</span>
                        <input type="file" name="guide-file-upload-3">
                    </label>

                    <label class="guide-textarea">
                        <span>Type the third part of your guide here:</span>
                        <textarea name="guide-contents" v-model="guideEntry.contentsC"></textarea>
                    </label>
                </fieldset>
            </div>
            <input type="submit" name="submit" value="Post guide" class="guide-submit-button" @click="postGuide()">
        </form>
    </article>
</template>
<script>
export default {
    name: 'NewGuidePost',
    props: {
        characterName: String
    },
    data() {
        return {
            guideEntry: {
                "title" : "",
                "contentsA" : "",
                "contentsB" : "",
                "contentsC" : ""
            }
        }
    },
    methods: {
        postGuide: function(e) {
            e.preventDefault();
            let newGuide = this.guideEntry;
            this.$store.commit("NEW_GUIDE_UPDATE", newGuide);
        }
    },
}
</script>
<style scoped>
.empty-guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 330px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 310px;
    margin-top: 1rem;
    padding: 0.5rem;
    border: 2px solid #FAF6EC;
    border-radius: 1rem;
    border-top-left-radius: 0;
    box-shadow: 0px 0px 8px 12px #adaaa3;
}

.guide-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 310px;
}

.guide-title span {
    width: 80%;
}

.guide-title-input {
    width: 70%;
}


.guide-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 330px;
}

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 2px solid white;
    border-radius: 10px;
    border-top-left-radius: 0;
}

.guide-section {
    width: 310px;
}

.guide-image-area{
    cursor: pointer;
    padding: 1rem;
    border: 2px solid #FAF6EC;
    border-radius: 10px;
    border-top-left-radius: 0;
}


input[type=file] {
    display: none;
}

.guide-textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
}

.guide-textarea span {
    width: 80%;
}

.guide-textarea textarea{
    width: 80%;
    min-height: 15rem;
    background-color: #FAF6EC;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

.guide-submit-button {
    padding: 0.5rem;
}

input[type=text] {
    min-width: 300px;
    padding: 0.5rem;
    background-color: #FAF6EC;
    border-radius: 1rem;
    border-top-left-radius: 0;
}


input[type=submit], input[type=button] {
    width: 200px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

/* Desktop */
@media (min-width: 1061px) {
    .empty-guide {
    min-width: 1024px;
    }

    form {
        min-width: 1000px;
        margin-top: 1rem;
        padding: 0.5rem;
    }

    .guide-title {
        min-width: 990px;
    }

    .guide-title span {
        width: 80%;
    }

    .guide-body {
        min-width: 990px;
    }

    fieldset {
        margin: 0.5rem;
        padding: 0.5rem;
    }

    .guide-section {
        width: 990px;
    }

    .guide-image-area span{
        padding: 0.2rem;
        cursor: pointer;
    }


    input[type=file] {
        display: none;
    }

    .guide-textarea span {
        margin: 1rem;
        width: 80%;
    }

    .guide-textarea textarea{
        width: 800px;
        min-height: 10rem;
    }

    .guide-submit-button {
        padding: 0.5rem;
    }

    input[type=text] {
        min-width: 500px;
        padding: 0.5rem;
    }
}


</style>