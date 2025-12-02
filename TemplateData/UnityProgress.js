function UnityProgress(dom) {
    this.progress = 0.0;
    this.message = "";
    this.dom = dom;

    this.SetMessage = function (message) {
        this.message = message;
        this.Update();
    }

    this.SetProgress = function (progress) {
        if (this.progress < progress) {
            this.progress = progress;
        }
        this.Update();
    }

    this.Clear = function () {
        this.dom.style.display = "none";
    }

    this.Update = function () {

        var bar = document.getElementById("unity-progress-bar-full");
        if (!bar) return;

        var length = 200 * Math.min(this.progress, 1);
        bar.style.width = length + "px";

        // index.html에는 progress-label 없음
        var text = null;
    }

    this.Update();
}
