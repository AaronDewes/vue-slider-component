<template>
  <div>
    <vue-slider v-model="value">
        <template v-slot:label="{ active, value }">
          <div :class="['vue-slider-mark-label', 'text-center', { active }]">
            <span class="text-muted">~ 1h {{ value }}</span>
          </div>
        </template>
    </vue-slider>
  </div>
</template>

<script>
import "../theme/default.css";
export default {
    data: () => {
      return {
        value: 0,
      }
    }
  }
</script>

<style lang="scss">
@import './styles/var';
@import './styles/media';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  font-size: 14px;
  font-family: Avenir,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;

  .content {
    flex: 1;
    overflow: auto;
  }

  .header-anchor {
    position: absolute;
    left: -20px;
    top: 0;
    color: pink;
    opacity: 0;
    transition: opacity .5s;
  }

  .vue-slider:not(:first-child) {
    margin-top: 45px;
  }

  .markdown-body {
    font-family: inherit;
    max-width: 1040px;
    padding: 120px 60px 40px;
    margin: 0 auto;
    color: #34495e;
    @include max-screen(992px) {
      & {
        padding: 30px 20px 20px;
        width: 100%;
      }
    }

    h2, h3 {
      position: relative;
      margin-top: 90px;
      &:hover .header-anchor {
        opacity: 1;
      }

      @include max-screen(992px) {
        & {
          margin-top: 50px;
        }
      }
    }

    ol {
      margin-top: 30px;
    }

    code:not([class^="language-"]) {
      color: $main;
      padding: 3px 5px;
      margin: 0 2px;
      border-radius: 2px;
      white-space: nowrap;
    }

    .CodeMirror pre {
      line-height: 1.45;
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    }

    // https://github.com/codemirror/CodeMirror/issues/5269
    .cm-tag.cm-error {
      color: #ff5370;
      background-color: transparent;
    }
  }
}
</style>
