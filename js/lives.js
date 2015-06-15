var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage) {
            this.lives = constants.HERO_LIVES;
        }
        Scoreboard.prototype.update = function () {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelText;
        };
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=lives.js.map