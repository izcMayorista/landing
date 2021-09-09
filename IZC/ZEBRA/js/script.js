$(() => {
    var page = function () {

        var $navArrows = $('#nav-arrows').hide(),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({
                onReady: function () {
                    $navArrows.show()
                    $shadow.show()
                },
                orientation: 'r',
                cuboidsRandom: true,
                disperseFactor: 30
            })

            function ciclo() {
                setInterval(() => {
                    slicebox.next()
                    return false
                }, 3000);
            }

        return {
            init: ciclo
        }
    } ()

    page.init()

})
// $(() => {
//     var page = function () {

//         var $navArrows = $('#nav-arrows').hide(),
//             $shadow = $('#shadow').hide(),
//             slicebox = $('#sb-slider').slicebox({
//                 onReady: function () {
//                     $navArrows.show()
//                     $shadow.show()
//                 },
//                 orientation: 'r',
//                 cuboidsRandom: true,
//                 disperseFactor: 30
//             }),

//             init = function () {
//                 initEvents()
//             }

//             initEvents = function () {
//                 // add navigation events
//                 $navArrows.children(':first').on('click', function () {
//                     slicebox.next()
//                     return false
//                 })
//             }

//         return {
//             init: init
//         }
//     } ()

//     page.init()


// })
