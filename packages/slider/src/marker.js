export default {
    name: 'ytMarker',
  
    props: {
      mark: {
        type: [String, Object]
      }
    },
    render() {
      let label = typeof this.mark === 'string' ? this.mark : this.mark.label;
  
      return (
        <div class="yt-slider__marks-text" style={ this.mark.style || {} }>
          { label }
        </div>
      );
    }
  };
  