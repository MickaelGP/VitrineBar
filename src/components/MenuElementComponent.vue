<template>
    <div class="col-lg-6 mt-3">
        <div class="menu-element">
            <div class="d-flex justify-content-between">
                <div class="menu-element-title">
                    <h5><slot name="title"></slot></h5>
                </div>
                <div class="menu-element-line"> </div>
                <div class="menu-element-price">
                    <span class="mx-2"><slot name="price"></slot></span>
                </div>
            </div>
        </div>
        <div>
            <span class="menu-element-description"><slot name="description"></slot></span>
        </div>
    </div>
</template>
<style scoped>
.menu-element-title h5 {
    padding-right: 0.5rem;
}

.menu-element-line {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    flex: 1;
    position: relative;
    bottom: -15px;
}

.menu-element-description {
    font-size: 0.8rem;
    color: var(--primary-color);
}
</style>