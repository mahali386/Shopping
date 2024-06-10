(function() {
  var countHours, countMinutes, countSeconds, h, m, s;

  countHours = null;

  countMinutes = null;

  countSeconds = null;

  h = $(".hours span");

  m = $(".minutes span");

  s = $(".seconds span");

  setInterval(function() {
    var date, nowHours, nowMinutes, nowSeconds;
    date = new Date();
    nowHours = date.getHours();
    nowMinutes = date.getMinutes();
    nowSeconds = date.getSeconds();
    if (countSeconds !== nowSeconds) {
      s.addClass("pop");
      setTimeout(function() {
        return s.removeClass("pop");
      }, 300);
      countSeconds = 60 - nowSeconds;
      if (nowSeconds === 0) {
        countSeconds = 0;
      }
      s.text((countSeconds < 10 ? "0" : "") + countSeconds);
    }
    if (countMinutes !== nowMinutes && nowSeconds !== 0 || countMinutes === null) {
      m.addClass("pop");
      setTimeout(function() {
        return m.removeClass("pop");
      }, 300);
      countMinutes = 59 - nowMinutes;
      if (nowMinutes === 0) {
        countMinutes = 59;
      }
      m.text((countMinutes < 10 ? "0" : "") + countMinutes);
      countMinutes = nowMinutes;
    }
    if (countHours !== nowHours && nowMinutes === 0 && nowSeconds === 1 || countHours === null) {
      h.addClass("pop");
      setTimeout(function() {
        return h.removeClass("pop");
      }, 300);
      countHours = 23 - nowHours;
      h.text((countHours < 10 ? "0" : "") + countHours);
      return countHours = nowHours;
    }
  }, 1000);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFVBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUE7O0VBQUEsVUFBQSxHQUFhOztFQUNiLFlBQUEsR0FBZTs7RUFDZixZQUFBLEdBQWU7O0VBRWYsQ0FBQSxHQUFJLENBQUEsQ0FBRSxhQUFGOztFQUNKLENBQUEsR0FBSSxDQUFBLENBQUUsZUFBRjs7RUFDSixDQUFBLEdBQUksQ0FBQSxDQUFFLGVBQUY7O0VBRUosV0FBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO0FBQ1osUUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQTtJQUFDLElBQUEsR0FBTyxJQUFJLElBQUosQ0FBQTtJQUNQLFFBQUEsR0FBVyxJQUFJLENBQUMsUUFBTCxDQUFBO0lBQ1gsVUFBQSxHQUFhLElBQUksQ0FBQyxVQUFMLENBQUE7SUFDYixVQUFBLEdBQWEsSUFBSSxDQUFDLFVBQUwsQ0FBQTtJQUViLElBQUcsWUFBQSxLQUFnQixVQUFuQjtNQUNDLENBQUMsQ0FBQyxRQUFGLENBQVcsS0FBWDtNQUNBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtlQUNWLENBQUMsQ0FBQyxXQUFGLENBQWMsS0FBZDtNQURVLENBQVgsRUFFRSxHQUZGO01BR0EsWUFBQSxHQUFlLEVBQUEsR0FBSztNQUNwQixJQUFHLFVBQUEsS0FBYyxDQUFqQjtRQUNDLFlBQUEsR0FBZSxFQURoQjs7TUFFQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQUksWUFBQSxHQUFlLEVBQWxCLEdBQTBCLEdBQTFCLEdBQW1DLEVBQXBDLENBQUEsR0FBMEMsWUFBakQsRUFSRDs7SUFVQSxJQUFHLFlBQUEsS0FBZ0IsVUFBaEIsSUFBOEIsVUFBQSxLQUFjLENBQTVDLElBQWlELFlBQUEsS0FBZ0IsSUFBcEU7TUFDQyxDQUFDLENBQUMsUUFBRixDQUFXLEtBQVg7TUFDQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7ZUFDVixDQUFDLENBQUMsV0FBRixDQUFjLEtBQWQ7TUFEVSxDQUFYLEVBRUUsR0FGRjtNQUdBLFlBQUEsR0FBZSxFQUFBLEdBQUs7TUFDcEIsSUFBRyxVQUFBLEtBQWMsQ0FBakI7UUFDQyxZQUFBLEdBQWUsR0FEaEI7O01BRUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFJLFlBQUEsR0FBZSxFQUFsQixHQUEwQixHQUExQixHQUFtQyxFQUFwQyxDQUFBLEdBQTBDLFlBQWpEO01BQ0EsWUFBQSxHQUFlLFdBVGhCOztJQVdBLElBQUcsVUFBQSxLQUFjLFFBQWQsSUFBMEIsVUFBQSxLQUFjLENBQXhDLElBQTZDLFVBQUEsS0FBYyxDQUEzRCxJQUFnRSxVQUFBLEtBQWMsSUFBakY7TUFDQyxDQUFDLENBQUMsUUFBRixDQUFXLEtBQVg7TUFDQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7ZUFDVixDQUFDLENBQUMsV0FBRixDQUFjLEtBQWQ7TUFEVSxDQUFYLEVBRUUsR0FGRjtNQUdBLFVBQUEsR0FBYSxFQUFBLEdBQUs7TUFDbEIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFJLFVBQUEsR0FBYSxFQUFoQixHQUF3QixHQUF4QixHQUFpQyxFQUFsQyxDQUFBLEdBQXdDLFVBQS9DO2FBQ0EsVUFBQSxHQUFhLFNBUGQ7O0VBM0JXLENBQVosRUFvQ0UsSUFwQ0Y7QUFSQSIsInNvdXJjZXNDb250ZW50IjpbImNvdW50SG91cnMgPSBudWxsXG5jb3VudE1pbnV0ZXMgPSBudWxsXG5jb3VudFNlY29uZHMgPSBudWxsXG5cbmggPSAkKFwiLmhvdXJzIHNwYW5cIilcbm0gPSAkKFwiLm1pbnV0ZXMgc3BhblwiKVxucyA9ICQoXCIuc2Vjb25kcyBzcGFuXCIpXG5cbnNldEludGVydmFsIC0+XG5cdGRhdGUgPSBuZXcgRGF0ZSgpXG5cdG5vd0hvdXJzID0gZGF0ZS5nZXRIb3VycygpXG5cdG5vd01pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKVxuXHRub3dTZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKClcblx0XG5cdGlmIGNvdW50U2Vjb25kcyAhPSBub3dTZWNvbmRzXG5cdFx0cy5hZGRDbGFzcyBcInBvcFwiXG5cdFx0c2V0VGltZW91dCAtPlxuXHRcdFx0cy5yZW1vdmVDbGFzcyBcInBvcFwiXG5cdFx0LCAzMDBcblx0XHRjb3VudFNlY29uZHMgPSA2MCAtIG5vd1NlY29uZHNcblx0XHRpZiBub3dTZWNvbmRzID09IDBcblx0XHRcdGNvdW50U2Vjb25kcyA9IDBcblx0XHRzLnRleHQgKGlmIGNvdW50U2Vjb25kcyA8IDEwIHRoZW4gXCIwXCIgZWxzZSBcIlwiKSArIGNvdW50U2Vjb25kc1xuXG5cdGlmIGNvdW50TWludXRlcyAhPSBub3dNaW51dGVzICYmIG5vd1NlY29uZHMgIT0gMCB8fCBjb3VudE1pbnV0ZXMgPT0gbnVsbFxuXHRcdG0uYWRkQ2xhc3MgXCJwb3BcIlxuXHRcdHNldFRpbWVvdXQgLT5cblx0XHRcdG0ucmVtb3ZlQ2xhc3MgXCJwb3BcIlxuXHRcdCwgMzAwXG5cdFx0Y291bnRNaW51dGVzID0gNTkgLSBub3dNaW51dGVzXG5cdFx0aWYgbm93TWludXRlcyA9PSAwXG5cdFx0XHRjb3VudE1pbnV0ZXMgPSA1OVxuXHRcdG0udGV4dCAoaWYgY291bnRNaW51dGVzIDwgMTAgdGhlbiBcIjBcIiBlbHNlIFwiXCIpICsgY291bnRNaW51dGVzXG5cdFx0Y291bnRNaW51dGVzID0gbm93TWludXRlc1xuXG5cdGlmIGNvdW50SG91cnMgIT0gbm93SG91cnMgJiYgbm93TWludXRlcyA9PSAwICYmIG5vd1NlY29uZHMgPT0gMSB8fCBjb3VudEhvdXJzID09IG51bGxcblx0XHRoLmFkZENsYXNzIFwicG9wXCJcblx0XHRzZXRUaW1lb3V0IC0+XG5cdFx0XHRoLnJlbW92ZUNsYXNzIFwicG9wXCJcblx0XHQsIDMwMFxuXHRcdGNvdW50SG91cnMgPSAyMyAtIG5vd0hvdXJzXG5cdFx0aC50ZXh0IChpZiBjb3VudEhvdXJzIDwgMTAgdGhlbiBcIjBcIiBlbHNlIFwiXCIpICsgY291bnRIb3Vyc1xuXHRcdGNvdW50SG91cnMgPSBub3dIb3Vyc1xuXG4sIDEwMDAiXX0=
//# sourceURL=coffeescript