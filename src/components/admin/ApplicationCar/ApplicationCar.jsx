"use client";
import React from "react";
import styles from "./applicationCar.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const photos2 = [
  {
    image:
      "https://www.shutterstock.com/image-vector/realistic-vector-car-suv-white-600nw-2266370697.jpg",
  },
  {
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUYGBcXFxcaGhoZHBoYGhoaGRkYGRoaIBohICwjGh0pIBcXJDYkKS4vMzMzGiI4PjgwPSwyMy8BCwsLDw4PHRISHjQpIykyMjIyMjIyMi8yMi8yMi8yMjIyMjMyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEgQAAIBAgMEBwUEBwcDAwUAAAECEQADBBIhBTFBURMiYXGBkaEGMrHB0UJSgvAUIzNicpLhB0NTorLS8SSTwhaz0xVjZHOj/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADERAAICAQMCBQIFAwUAAAAAAAABAhEDBBIhMUEFE1FhoVKRFBUycYFCscEiIzNDY//aAAwDAQACEQMRAD8A9HIppFWClMK13KRxUQlaWWpCtNiqsQzLTYqQiuRTsRHlrhWpYpRRYEUVyKmiuZadhRFFKKly0stFhRFFKKlK0stFhRFFKKky13LRYURRXYqXLSiiwojilFSRSilYyOK7FPiu5aLAjiu5afFdy0rAjy0stPilFFgMy13LT8tdy0WAzLSy0Nxu3bdvQdcg6wQAsbyxO4CrJ2jaCqz3FXNuk7yeXOiwLMUitK26t7rAxy4U/LSsCjjMCLgykkDiBoPp5g03CbPFtYUD47+ZJJO/u7KvZhz8tfhUN3GoiliYA5/0k0AZ/FXHztHPkx9TvpVcb2is8/h9a5QAKwW08SMhLKjFgLiFt2jxoeOtontYjsrXbPxi3UmVzqSrqDMMOXMEEHxrF4uzZe4bbXJudZVfKJz3dU6w3MunfmB4aw7M2Tew7qqOSpWCQQeugyoY5nJl5aiOIHzuDVSx89vQ65QTPQyK4VrO4X2mLXLVspKuqSx6pG8OxHZx7R538Zt63bYqVJAfLIIgyJUjnOg7zXqQ1mKUbujF42EstNK0yxi7b7mAJ4HQzpp276nK11QyRkrTshqiKKUVLFLLV2KiGKWWpctdC0WFEWWlFSla5losKIstLLUuWllosKIstKKkK0stOwojiu5aky10LSsKIstdiuYi+lpc9xgq8z+daBbT9rbNterq0aSR5wNaxyaiEOrKUG+hoAlRXL9tZzOojfJGlYA+0d3ECZuW1cwN6kj9y2BLbvyKHXcZZtsLa9Ip4uxzNrpvYmDruX0rhn4g+kV9zRY/U9BxG3rKCeu55IhYmo8Ht5LhgoUncCQTvjUDdWBZ2t3FRQSjCSzyWPLSPSBRe1gyrdJczkcASBJ7ida534hlTvgpYkb8REyPOmhliZEDjw8+NYDHbSdREsNwAUy3iRoopuHxV9x0avAEFgOsZ5E6Ca6sWvUv1KhPC+xuMXtG1bQuziOHb3VnMZ7VrAUMobUkcCORbcvqaxW1TdN4g3Cy5oOpMDlmEazy86AY/Eqjk5gOyQT8R862epviILF6m8xN+3c6PNI6R5hBAAB5jwmSO+ltvZrPcTo4Okh8x6ukyAolj2CfnWK2NimW91rgMJIVZOXUbzEZq2HsxiltgvfaGbcHBiCd+Xc3H3jVwy3wwljroHNg3Qri1aF1svvdQKJ3ksx6qjXdJNalgFHWJPhPgCflQtLVq6FdLpVRqVXL1jzjie2q/tNt9LVrLbytAMngOczoTW24xoKbRDm23RRmjiRoOO+Yry7bG1bi5bV24YBGYhiBu5RrSb+0m4jQqDKJ0JJJkceA7hQT2p9pbOJQQjdKd5AUKO4TNS5quGaRg75QbGPwekPcIga666a+tKvO1Zufx+lcqPN9jTyz1DamzCga+rQ65ARqEe3bkBiJOhyEaRuA11izsjH3LyBG6r5s9osBDS5UA6mASB/CVU7qN4e46236MfrEXo2ZiZXNGR34ZTqcyyNDMGKzm1NqYZZcqbd9Cj5V6o6xliV7gBukGTEk189G5LbVs1osbdxauVa2QpuW1uNzD5xngzuaVJWdejNC8Kctx7LTczANnMhWOTIAo3qcwgazrUdu2l1rpLZWvM8Iygi07XM4Bk9UZTE93GKJYWwFAt3LkoMzKbcLka2waM2oc9Z1HKG3zWvEFQmiXCYl3e1czIoe3aYCSCWUt0i5Y01VtTvr0PA7SS4QsgNA4jrECWgdgKnuYV51tLAWj0V1LjJbuKuXQsqM2g00OT9YW03RwrQ7AxVlHN+5cS2oTrydBcKoomfdzBWgaye0AVrp8rjNV0fDIlG0bKKVY/aPti5kYaxC/wCNiZtp3ra/aP4hPnWXx22+lJF7F3Lv/wBuzNq33ZbfXb8TmvYeRdiY6eT56L3PSNo7aw1j9tftWzyZ1DfyzJ8qF3/bXCKucC+6D7a2LgTXd12VV9aw+Fxy2/2GG6MniFS253nVj1juOpNOvbWvtqyMfxg/OmnJ9jRYYL9UkbPA+3eBuOtsu9pmML0qFVJO4ZxKjxIrStHOvJVxS3RLKGKkStxAxUndoZ30Z2f7RAtluKervhvlG6kpO6NZ6OMYKe7hm/Lr94eYrquv3h5isftH2gwgTqhy3Yw+lZ1tv69WY7TNWnJ9jBY8feXweqacxSy15Q/tHcHH41we1Nwfa+NVUvQXl4/r+D1mKrY/FpZQu+4fnx8K80X2xu7pnsmqt/bFq5+0sW28Mp81g0pRnXCF5cPqRe2n7QPcuFmKrvyjqsQNwA3nMezuqns++7yypbzASQQpIJ3FoGrcpOmm6qaW8JOZFvWmPG1dJ05RcziNKu2kSIt4jJJ1D2hJ72Qxm7cteZl0c+XVs1SiuE19yxYx91VJcrJ0bULv4FtZ37pruMwdk4dbgth7hYHqyJhjBJ3wIjUgdlBNv4HImdFzjcCCD+JjoUE9gqT2Y2g5U23LPIO6WCjw3a7t1YrC42+hVATGbbu5/ebpBELHVXtkfEUd2NizdQvcuFyBJyzC9k/aPce+q9r2Ve9dzOr66AmAsDdu0PMDfzrS2dgLbZURDoIOsDdrocxJ7CR3Upwi48dRwi07A+JAv2c1jRlcQCMzcZPIHeImqeNv38NbgMyluJAHPQCJJrVPZ/R80J46k6cNIjuFZLb2Ke+4LjqzAGug508cW3yuCpKjPW8aWk3WuOZOnujtPAT31Wu3A8lLYULugj4AAE9tbNNj2biqqsB94mF79w+Emq2P2fh7ZzA5wNFAMCecADlxrpVEUZ7Zdtpbm0axmPgN1EbuHcdQyFG6RxPbO+rD3BbUQcubgu/xfy0FR27IuHNccBF3sZjuVd7nuodiovbK2hbsqWNwsdd+sGRECY85oVtbF3rz9I9wleEnQD4cqlex0jfq1y2x2QT4AzNcv7LuuYClRwBGsczroKrfxQtncAYgAyRmbt4d9V7GHB1doHIST4cPOtA+y7NsfrMWoPFEVrjeYAA8TQ266SRbHV4FjqfARVJgVP1fJ/Nf9lKp/wBGPIfyilQB6VsvHm05uLclHJZDGZoEZrbhd+haDxB3a1lvbFFfFubIJW4iM8mShMrHCYCqRMwCZMV32fwl53uMhZUllS6SVy794EdTQyB2VobuDdGKth4VTo7ZColSQy3AAwRsreeo1k8WOEYTbsaVgb2e2TbZFuXDcQ3M4VwYLBQDAE7oBEkzKjXdRfHWcls9G9sWxGcGSzhhkBY6xGpneJXtoJiNpL7ptsloKYAOSd5BVmEGZMhd4POKvrZtXUQrbdLYUM7N+zCoZKtJJYkNlgxABO8akscpStjSt0XcRiLdu3aJdiVjIqjMXS6C7Wo3giYkcF8hT7QuKBkC2huBYh7pjMZLe6oEk8YE6Uhe6RjebqrB6MbsqHif3mAnsEDTWaKNneeBJAn7qkFj/NlWO0866ceGMUEpqLpfcJWLAZQ1zNcc/wCISe7qnTTuq0GVBwEcgPz6VWe9CwurHeRpHjvqBGUbxrPfXWltRg25O2XLVxmzOP4ROsbmbx/Z0gpb3nPwruFP6sGABvZjAUZiWEsdAcpUeFUMTj7M/tATyWWHnAHlNNWDLuUKwI49Q9zHqnwfLryLVQxpKkMDx1+Xy86dbxa3AbanQgiRP/Iqw650JP2l8m3N5GR4VMnUlI9DSx83BPE+q5X8A1b0mTTWujuqsLkb+0Gk7jdFb7jzaHtcPAzTHv1W6Q0xieNPcS4lrpqcL1U1p2aqUhbQpgR0jZc0aEjtI1jfymr2GwlxjCk+IIoFhrhDaGCDI7wa3WFxC3LSupyyNVURBGhHnUTySj0HsVAnprtpsr6dxkfnvq/srGi02dLYe39q2sBwOdonSf3DpyK7jIluCep728sZnwobjbPRsWUqF+7m18By7KT2ZVtkgjcHaPUMPibV20ly1cUqRz1BG9SGgqw4g6is5tH2ytYd2QHOw+6pMfiiPIVjHzOC9tylwgZoYqtyNwaNzDcG8DI3CwpguTmKtBW4SWVuRWdPDQ1xT02yXPQ6o5dy4Du1PaO5f1VWAPFtP6nxoHdwtx5cMBH2ncKPATr4TXbNwuSWUQO2APCkMNbJlrgCjvY+UfMUKMV0BtshtXbkZc+g5ClisSluAWJbz/4qbFbWtW4W2pJ5mZ8BJigW0br3WkgT36+NDQBjAbUt5s1wdIANEJ395Go8Kn/SUdizZLQJ0UTlHgAzGs3h8HrBMd0VcKxu18KnZTsEw3d249rS1dY/wobfr73woLjNo3rh67sZ4anzGknvqBu0/n4Vw5uBppJA2zptA8/OPhUiDLuCj1PrTbVk72PxrlzEKNwqhD+kalVbpz90eVdoA2Nv2gKNcBDGVj3IDljJbqwUO8kGSd/Oau0/at3tsLeZR1DDBepl9yGB0MMxnj31q9oezNnMty2LVtZWM7lVVjo6trG8iNI6+8De7Eexl9bmUW85uwpcrNlFUF1kB+Y37oaIJJFR+HgndC3mLsNduGA4JuxAZbbzdYAwI4MCQcsAmCdZoxtS2F6PCllAb9ZiHUZVdhAyjmCRH8I7TGr2z0ODItKpV2XpHJkjrk+7ppqjdup5ms9d2gDr1gOHVNOUkmdmHA5xu6sFY11IhGGpgcYnj8PAGo1uIpOoIUKijsGpM+IH4asNtO3OtwDs3GpU2rZA/aL3SaFkL/Ar6hi3LZHvgDkCAKrYq6sHLlHVO6CTu+tXRtW2ftp/MtRtjLZ+1a81b51fnUL8u9wZtq2j2wJIymAeERER4UETBP8AZZD4x/qArWFLTcLR/CtMOz7f+Hb/AAyvwpKe7oEtFKPdAXZNm4r9ZUiDqSpM8AMraHXyBo1avkAo2jDrAdh3xz1BP4qpbQwaIkqrKSYnMxjQmYJPKoMMoSHJJMkAE7xGvDu9amWRLhm2k0+THkU+xBtI5XPJtR8/r41XW8DvNafEbOtvBIO7QGDEx2UlwNtRAS2e9NfNWBrZZKXIp+GuU201V8Gbw1xc2uo10qdnWDoY4d1HFs21321/Cbi/F2pyW7E6qwHIOG+KD40eYP8AK5JdfgyzOAeMUhckjQ761OIwOHJkOwEcQNOYgE1Nh9g2bgJRrjRvhAfSc3pVLIzJ+HVy38GYt4W5m0tXN/3G+lFsJiMRaBVLVyCZ1tsdYjSPDyorY2VbtkhbzITvBtqJjsY1ZGD/APyfO2p+cVe6+qIegru/sAL+Lvt71u6PwXAPhVcXI3qR3hp+Fa1MCn2rs/whkP8ArI9KlOAtjc2f+J7inzDEelUpV0RD0Pv8GSt4lRqCZnXl/wA1ZxFlby5lIW4BAMwHA+yxG7sbeD2VoGwuHH7SwSOYZnHo0+lS2LWBO62s8Ye4CPDNpV701TM3oskeYmFO0Li9S6rXVmIYdZSPslpDK3cYO/UaVYu2RrAYKN07/Hh2VsW2PgWfpCLoMAaXNIExvBnfxojc2dgrgywyjkCNfT51zzhJ9AWCS6nlRTraeJ3VMxyjQDWtpjvYq0xm1iMnY9smfxK3yoff9i8SPca1dHDLcysfBwo9ahwl3QtrRlQxnUAUzKZJJAHjRHG7AxdtobD3gOYRnX+ZQV9aFXXCsV1kaEcu8VDJGOVneT3f8VJbB4VH0g/Irj3NNwpCJLhPFqjVB2HviqzkzXenimBPm/h9fpSqr03bXaAPaNmYS3eVrdwgN+qGozGQpKM3FgUW0SN/WA7/AEbDghFDNnIVQWjLmIEEwNBJ4cK8Z2lt5cOSUIzlYBBlkkhlMZYBA6pBEHKkzEUFue2eI6W3eZ2Yo0xmKi5Ds4BG4e+VjlVKSq0Q0bF8aHfEFyWcXmtgsSYC5iY81HgOVVHKbzr2CN/ISQJ7SaG7Xur0twszAs7vC83aWO8aE8OUUPvdZS1ty5tgsUOhgbzH2vWsLfVo9fDKMVtvkLbPYXSRctFVG4kQCZ3QavNsfDn7Fs/gX6UDG1glsO7EO0QiRm8TrA03b+6qw9on/wAM/wDcuH0LRS3JG7uT4RoX2Nh4/Zp/IPkKEYjAYPpDbKDMDEg9Wd29W9d1Qp7SaHMt0+Kx/pJpo2zhy2dkZXP2sisfPTWhyQLjqjt72fs8AR3E/Oarf+nV4Mw8vpVi7ta2fdun8SR/5VA22CNzK3dI+Ip7olKKZxthPwuH1+tWcLs4oJI6QiYBJAPLjz7al2ftFrhhUJjfuMDnzii+J2lbw9qWXM7AZBpBY6nX7o3zQmhSUen+TNbPutcuBDcuCZ16p1AJ1leyirIAP2hPeB8ooC+Kus7XNFZiScoy79/aKY167zJ8RTjKlyawyY06v5Ct7+IHwI+dVL14jhI7D/SqqYnWG0NWrN0hlZWKspBVhvBG49vdxo3qz0drniflPnsK1ipmFY6EnSYHPQ9tIXV/IP0re7Ms4bGW5Vrdi79tCoS25mcytErrBiY4ET1izGexV5jNtbT9qMgnwmJ7a28qEu54n5pqcUnGUVfujGrjW3dIY5FpHkact1uBHhp8NK2Oz/ZM22BvYa6whpyqGEmMugbUb+PLSa4PY4EkixdyySMygGOW/dS8iukjSPjX1Y1/HBkRefnThirg40a2r7Pfo9ku6OGG+CoAEmBoZJPVEaeNZRrpVCS2pIABYgSTMTvgCfSpeOa6SN4+L6d9cbCP6fcHGo7uKLe8Ae3iO40KOKfTq6mYGczIiR7u/We3hTRiXJgKJ0+3z3H3dx3Tz0pbZ+pX5rpOux/AVTE3Bpm8/rVzZ965cuC2XVBqSx3AKCSd44DnWd/TGicunPMNNYMyvAkA8pqdMeVIJDqymQ0EwRroy7iN+6hLIn1G/EdJki1Ti64bSfJrMe97DESy3EIBkaBlO5ok6HmDI7JE1Dt0g6TG/h5UKxPtC9xSrtOaMxi5JgyNIyrrHugTAmaoNipMLJPKMvq3eN3PWtHOd8dDDHqtKsf+7Tl7LqjV2PaZ13Fh6fOrV/bVrFKLeJti4u4MQM69qtvB5VhximMELv0GvHXTdv0I8KQxT/d4x73HSOHaPMVScu5hl1OhkuIsre0uxHwl7JOe24zW3G50+TDcRzqlbtsRqp84rZ3bF3E4J2yMwsHMTmnKR2bwGRju06qnSdckFbkfEg1ElTPJbTbohZB90+dRvYndV+3hSeC+YqQ4dBvK+f8ASotBQI/RDzHr9KVFZt8vWu0bgoKba2He6Q3FDRcl1AVtAeEawfe7vgNTYt49UoyyY1BGYHTj289d1esHZzTrjMWx7LhHxmnLsomf1uKJ3mb0DxEa0kmkFKzx32jxDPibgBJAaBHGK5svFPbdQSeY4xzA7COHOKv7Nwivib1y4Jt27hzDUTLkBdNQN5PYpHGrftRs9LZL21ylHhlGgO4q4E9XeFMaGVMDWdVHge+p2Bboyuw5Ex3cPSudIedWDZa44VFLM0QBqTpp6caLN7JYlVkhCeQbX4R61zbX2PZjkikrfUBrebnTxiTVjEbPu2/ftsvbEjzGlVgBUmqfozpuA71FNOXlXSlMZKBuy1gcW1q4ty2xBU8KIbXx1t7rPbGW0ijIvBQeswHIFy8dgFBVpY94tKOLsxPcIA9c1XCNs5s8lCDkuvQgvbVuE6QBwEUk2rcG+D6VBhcNnjfqYAUSzHkBV/FbKe2JuWbtsGAGdWAk7hJGh7K6FZ49lrC4pLoykQeXHvFWbJMEHeuk8xwPjWdDG2wPI+Y4itF0khWG5hv+P18axyxrk9jwrUuOTa3wwvsy6xIVXZexRMz2chru5iu4raWQg9IrEiQV1+kGhKXSDIMHspt2HbM8sx4kk/OpjmilTR6Wr0ebLk3Y5UvRhyz7W3EX9o47A7D0q03tLdbQ3H3cXY+G+s2mAUw2vPfTzb5MKmeV9jXSaGUbeZJvtSRobEX8yMRJU5DOuYEHQnjv9azV9GPSWLg68HKe0QRB4TlB8CONXMKzAwZHIjgRqNeFWtq2+lCuDFwRqIEnn36UY8tdSPEPDvOjugkmuy4sz1u/+rgkzD+EMpQeHSUjfnKZ1LIPB0QsPEtPnTsUmYkljbYgghllNyqSrfZ0RdDyqApqDnt6EEDMBuAA+1wgV03fQ+XnjlB1JUx63Z4+8EJkby0AnxD1D0xIQgnRgR3frAPQR4CktphHXt6ZftD7IXt/dFcWyRHWt6R9ocM3b++aCaZfL93l4fCob9z3fxeUa+kVUTDkT17eoAJzjgsc/Guix+/bGhEZhxCjnyHrQFMluMSGE/aPmHtk+oqS7cPXM8vUNH+oVD0Z39Im+dIMnX97u8qfbsn70/wox5dh5DyosaxyfRGg9ncTkdyxJRpDjmrkfQ+o40BxNjo7ly3mgo7pqTPVYry7KJYc5LVyQQSFCzvgFj8WPgBTvadFGIY5RN1VucB70gHvOWazUrbO/Vaby8GNtU+b/noCBdPOa4c37vlVi1bn7I8x9alfIN6z41R5wPy3OXoK7Vzq/d9T9KVAHuJRDqPMU3oBOjA+IBrOriweOvkasJj2+8T45v8AVNOhGAx1o4Z8QHEocRcFyN+VktsD4dIT4mrftC6PnykMr4VipGoZli4pH/aFT7XvjPi3uAEBxCx7zPYsqogVRvbPhLd1gEFrDAZJBIZbbhzv0zFpPdVq6Jb5AmzcbctQbTFXAI0AOi6aggiNAaO4b2yvjS4lu5z3o3mNPSslZv5WOu6Dp3R8h50XTaN0AZ7aXF4Z0Dad+9fCKwknu4PWwzg4LdXoai17W2GH6y3cQ9kOvmIPpT3t4G/ue0xPP9W584as2MVhHBD2rlpoOtts6z2htQO4VMdk4d/2WLtnktxTbPmd/lSt9zTbDqrRfxfsou9GZf8AMPr60HxOxLqbsrjsMHyOnrVg7HxtnW3Mc7T6eUifKo321i7elxZ//YmX1GWaP9PdFLcujsFNZIkEFWHAiDVLaKn9Wv7vxY/Wj2K20l1Cr2oYaoyn3W46Ee6RoRPI8KEXLXSXbCffCr/M5T51UKvg59W24K/U0Ox0GFtpfiXbLPNLT6LHa2jE8iBwMl9uNkxaEIuW7hyXG8XB1dHG5hrxoHjtpKHZLghHZlE/ZHAHs3DsrQe0AhrDe9kwbkkcYNuDXQujPKfUw22cGqsejno2zG3OpGVirJPEqwIniMp40/Zb5rRHFDPhuP8A4UVxAW5gE3Z7D5iY1K3GCP8A52tnwoHsd8rsn3gY8tPXLUTVo3wT2ZFL3CdnVhyGp7gJPoKoW8SAssSN2oJ49lW0PVY/uOPNSvzoXeWQqc2J8tPma5sMFzZ7PieomnHa2uL49y8uLU7nHjFWLbzuZT4xQd8NqY1CjU8hUYsCfyD/AFq3ig+xxY/EtTDpL78mnGGuBDcyHIpALCCBPONQO3dTUoDh3dJy3HGmoUss+GgO/dNPS84A6xXXjA/1VlLTLselpvHHH/lV/saJrpjf5wfiKgZ+wUO6dtBmJ7YHyUr6+VQNi2AkvxA1A7eU0vIkdUvG9M/6fhBu2gIJyzHAaf8AieJGugHOtpd9h7Km4vTXGNtlQ5bSMWZhmyqOkmY11AmDE1gdn4+0oIvgtBJX31iQuvUGu46GO7l6BtD252fcN0i4y9LlAH6LJIkZs56QdI0qCjDKUKj3tx7pYsSwwr9XN8+/B4mfxLLLK3B1HsqRYwH9nti6XCYhz0blGPRoBnBYFfemYAaDwdeekP8A6Mwwcp0mIJFwJIS0BBZrZuiTOQOjqftSJCkEEvwf9o2AtdIFfExcvG7+zUHMXLMAWubiuRYEaqT9qBWb+0LA9Ibn/Vj9ZOtu0oKdK13o9XP23braGNI41l5cfQy/H6j6v7FrD+x2Ga4tsvilZ2ZTIsjKVV3EwT7yo50mIhsp0rBYslLtxASQrsoJiYViB8K19v8AtGwaXLd1rWKd0ZyGdLCy1xShMrqOrvCwCQCRNebYjFFndizDNcY7z9okxoZ84qJ47/TwdWk8UnjbeTn0DeDUO4LHQamToANZ7qrbR2gL7lguYrxicqn3U3HdFC1Wd5J8c358jWy/s72SDbvu5C5mUCdxChtQY/e9KSjsTbI1eseqapUkZZb5BHVH8oqSeMH+UfSvR7uwLM71PbP9Kif2dssCBcVT+8p+UUvMRw7DzvIPuN5/1pVuP/oCj+8s+bf7qVHmBsZOew1G90LvZR+KPQmhe1dhG62dHIJ3hizg+vV7gKB39iX03IGH7jD4GD6V02ZBTaTh2uBSDpbumCDqoZeHLInmKg21fB6dp91FAA+10ojX+YnwoNav3LDhyhGhVgykBlO8Hs3eVQ7Z2mtzRFyjqzrmJyghZMDcCwHefCt3FEOPNgpn1kfnT+tSWsVc4Fj3f8VVLVNYu5QeZrMsM2c7AS9vUbnmR2GFOtMfTQoD2odKGHFGufpRoKUmujCtrEZPcuPbPYSvwiiFnbuIXdcDjkwVvUwfWs3+ltzppxRpbUaLUTXcOY7aDXN9u0p5okHzk03Y5/6nDE7lup/7it8zQYYo1ZwWL/WJm4MDPcZpKNOy8mffCmuTUbX2aLzFyQqhblwMeMHcOckAeNNw+a1gBdL9ILmazH3F6QN3gSrdkE8qs+2eNYW7dtFAA6gjlv8AiJ8KmbC2sPZtIys6lX+02XPKtmKzEwSJ7OyttrtnHfAB2YG/6ksZVbV9dPdm2bbqfNKE3G6PESODfA6fAVp8ZjENm6EEAplgfvui6/zVl9r/ALVj3H/KKllIJYU++gGYajjuJ3+gqW2mURl38SAT3TGgoUlzcRRGzjz9rX41xZFJN0fT6PJhyRj5iVru+RzWEPAjukfA1EcCvBiPMjyiKuri7fPzFTretnivjpWe+a7s9F6HSZfT+wIOzjEBh5AfGups19AIPcY9ACKLvbtsNyd4Ovoai/RBvGbwYkfX1rSOV938Hn6nwmMeYRtez/wVsRsbEIoZ7bZWBgwROkcTlPlVK3gmggqw1O4gct+WJ40Zu4W4yCXaOGZ2GnYOkOlVTgW+9/nP+6tfM90ectA3/wBcn+1A04S5LHLv7hxB4QeHPzpDBvI03KRv5g953nnV39Bbi6+b/wC+mnBfvL//AE/30vM90P8AAf8AnL7oqrgmGWI0MnWOPiTuHGuLgXEaqNZMHLy5b+PHjVtsCn3083PxJFcbCJ95R3KrfFae/wB/gf4Gv6PvJFb9CI+0o1k8PhHbvpz4dSR1kWOG+Tz379Kn/Rbc+9P4Lf8Atp6ogO9vCV+FG/3+A/CJdYJfvIn2YlpTLA3GkQDJTl2ye/StxsTEsxe3EuBMdZcoGhAEiIJ9aymy8O9wzbttcykA9ZRlnt3A9+tbzYexlRnu3i3SOTAt3GQqCZILL70mNN2nHgO5KgzeVDHVq/RckT2nO868sz/M11LVxRwblB/rFHzhkP8Ae3x+JH/1IaQwg+ziH/Hbtn4Faz2M8/fEBdJe/wAJv8v1pUd/QX/x7X/aP/yUqW2XoFr1M80/dnwqF0nWI8J/PnRzFYB0MOhHePnVK5huyt7MaBLWeR8qF4vY9pyc9tDPHLlPmNa0T2fyagZByju1HlVqQqMdjPZS3vSV7NGHqQfWg2J9n7i+6pbuUg/Metejva4iDUOQcQR36inYjzG5sq6uptuB/CfpVRrNeqmzru+dVsRg7b++in+JQafAHmJtUwpW/wAT7P2W3Sv8J+TSPKhmI9l2GqOD/ECvqJooDIladbbKwPI0Zv7Dur/dkgfdhvQa+lDruGI0IIPI6GkBsLym/aFwdaAs9joAD4kQ3c4qPa2Ob9HsPOiuJ8RBnzNCdgbWa0SpgqdCp0DDhB4MJMd/iCOIv2GtFD0sTOTKAR2Zz1R369xrXffPtRntoj2kFVEAAzXTnaPuIdPN4/kNAMe8ux7h6Cp8ZjczE7tAABMKqiFUTrA9TJOpND3eags6gB08q5HZUTGuRUjJuk7/ADNd6TtI8SagpTSotTl6ltbv7x/PjVnD3knrlyP3WVT6q00Mmu0bUNZpr+p/c01h8FpnbFDu6KPhNFsJb2YdGu3j/ESPVUisIHNdDmltQ/PyfU/uesYTZWyX0BYnsxGvloayHthso4W9mtFmw7+4T9k8bZIO8bwZ1HaDWZF5qf8Apb5Ss9U7xwPhTSE8033f3LqYpCkHNM7wTIHEb4I7dD8agxl1BARrh55zEdmhNUMtdCGqb4ojdL1JlY8z5n60X9ndkPiry2kEDe7D7C8WJPoOJ8wOwNpcw6TPk49HlzebaCvUPZjb2Ds2xbskWpMsLg1Y82dgVY+OnZU2Fmn2VsS1h06O0sLJJk5mYniTxMADwq4cL2fnwqEY0neiH8IH+mKkTGLxT+VmHxzVIxGxHPzNLozzPoamGKQ8XH8j/NTThdX/ABF8VYfAGkBXg8z5UqtZh9635n6UqACtnbdturcWP8w+tdu7IsXRmQhZ+4dJ7V3UCw4ZxJQEHcV+n0J8KkFsoZBIbmsg+VTHIpFSg4sWM9nrqaqM45rE+Kn5GhV3CkaMpB7RB8jrWjw+2Lie8A689x8/qBRBcdYuiHA14OB8fpVcdieTBXMKeX576gbDn+m/0Nb3E+z1ttUbL6j6+tBcZsG4nDMOzX030coDLXLA5a9lRC3yM/niKNPh40IM8uPkagfDjvHdRuCgY9vw+FRZDy8qJtZjdUDJ2DyqlIKBzWdd1Mu4UEQwDDkQDRTJz9NaYbZHb+eVPcKjO3/Z6w/92Af3JWPAGKHYn2WU6JddexgGHpEVrmtg7/WR/SmGzyY+Ov8AzTsRhrnsi/2bqE8iCv1qm3svfH3T3N9Yr0J7bD6gfKo2SeR8KfAHnrezuIH90fNT86YdhX/8N/KvREtHgPIn4GpSG3fH860UB5m2x7w32rn8rfSmtsu6P7q5/I30r0vMRvj5+W+kboOmv4TPnRQHmabMundauH8DfSujZF7/AA3/AJT9K9KVAd+o8jUrIvA+B0+NFAeZrse8f7tvQfE1KuwL/wDhnxKj516E1oH/AIn4UhhRw9CD6GigMEvs5f8AugfiHyqa17MXT9q2O9mn/TW2awRu19PhXCh5fCPqakDLW/ZB+N1B3Bj9Kt2vYwcb/kkf+Ro+um8EeY9Kebnf+fOlyPgF2PY2z9q7d8MoH+kmi2C9nsPbYMqhiN2diQO3KdJri3SNx0/PdUyYknhS5GFxPb4EfWnAnmfEH/ihqYo9vhU6Yvt8wKQy50jcde/X5U8XDyHr8qqDFj8z/wAelOF8d3f/AEilYFrpT931rlQ9P2+n9aVFgPTabhpEq2muhB4a8z3g+FXX2xcj9YqMOYkEfQdxPdSpVwxkz03jix9jaVsuEbNadt09dG8pI8au4nDldWAjmN3lvHhSpV0Y5NnFlil0OWr724KuQOA3jy4USs7eI0dfEfSlSrZMwZfy2b6yVDA7pEHzoXjPZkHW25B5Nr6767Sq2IB4zZ1xPfA7wRVF0G8jxH0pUqkoiuYblUDWt+vn9RSpUANKkb91MNkH8wfOlSpgMFntkdv51puQTrSpU0ScazppB9PWoyDwJ7jBpUqYDIO7f6j1pNZnkfz5ClSpiGhCu/Txn8+VODacvUfWlSpgLXkPDT14U43CN4+BrtKgCS3eHL89x0pMBy+Xw09KVKgBkCOPbTDbWN5HqK5SpAOOHI1DDxn+tQ3LJGseIMUqVSBwPwJ/PqKcy9hjv/PwrlKgZwKBxYeNTW83OfQ1ylSAf0h5fnzrtKlSGf/Z",
  },
  {
    image: "https://assets.autoweek.nl/m/429yrpybeotg_800.jpg",
  },
];
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};
const ApplicationCar = ({ car }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.car}>
      <div className={styles.item__left}>
        <Slider {...sliderSettings}>
          {photos2.map((photo) => (
            <img src={photo.image} alt={`Car`} key={photo.image} />
          ))}
        </Slider>
      </div>
      <div className={styles.item__right}>
        <h3>{car?.title}</h3>

        <div className={styles.item__description}>
          <div className={styles.item__description__left}>
            <p>
              Категория: <span>{car?.category?.title}</span>
            </p>
            <hr />
            <p>
              Год выпуска: <span>{car?.born}</span>
            </p>
            <hr />
            <p>
              Привод: <span>{car?.gear}</span>
            </p>
            <hr />
            <p>
              Двигатель:{" "}
              <span>
                {car?.engine}, {car?.volume} л.
              </span>
            </p>
            <hr />
            <p>
              АКПП: <span>{car?.transmission}</span>
            </p>
            <hr />
            <p>
              Цвет: <span>{car?.color?.title}</span>
            </p>
            <hr />
            <p>
              Срок финансирования: <span>{car?.period}</span>
            </p>
            <hr />
            <p>
              Пользователь: <span>{car?.company?.name}</span>
            </p>
            <hr />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ApplicationCar;
