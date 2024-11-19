document.getElementById("header1").addEventListener("mouseover", showHeader2);
        document.getElementById("header2").addEventListener("mouseover", showHeader2);
        document.getElementById("header1").addEventListener("mouseout", showHeader1);
        document.getElementById("header2").addEventListener("mouseout", showHeader1);

        function showHeader2() {
            var header1 = document.getElementById("header1");
            var header2 = document.getElementById("header2");

            header1.style.display = "none";
            header2.style.display = "block";

            document.body.style.paddingTop = header2.offsetHeight + "px";
        }

        function showHeader1() {
            var header1 = document.getElementById("header1");
            var header2 = document.getElementById("header2");

            header1.style.display = "block";
            header2.style.display = "none";

            document.body.style.paddingTop = header1.offsetHeight + "px";
        }