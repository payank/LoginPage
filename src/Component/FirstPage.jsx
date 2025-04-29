import React from 'react';
import './style.css';
import SearchbarNav from './SearchbarNav';
import SidebarNav from './SidebarNav';

const RapidusHome = () => {
  return (
    <div className="rapidus-container">


      <div className="rapidus-main">
        <SidebarNav />

        <main className="content-area">
          <SearchbarNav />



          <div className="whats-new">

            <h2 className='heading'>What’s New</h2>

            <div className="Tanaka">
              <b className='Taro'> Tanaka Taro </b>
              <div className='tanaco-icon'>
                <div className="icon-big">
                  <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/lock-circle-green-512.png" alt="Icon" />
                </div>
                <div className="icon-big">
                  <img src="data:image/png;base64,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" alt="Icon" />
                </div>
                <div className="icon-big">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEVIsCz///9HrSxHrixHryz7+/tIryz+/v79/f38/PxVtTzN58jZ7dRErybm8+N8wmw9rBuz3Kqf1JNhuU13wmc4qxEyqQD0+vL5/PiUzYbg8N1ou1VatkTS6c3u9uyl1JuBxHPC4ruHxnodpQC3269ywWCq1KGlRT3vAAAbBklEQVR4nMWdaZfqLLOGiUmTOKAYO4PGoePW/v8/8TAHCshgP+86ftis1nRvLoG6qaIAtP7KE/76UuX6K1Gl+Dn/WsufTSk/z3W5L1FFEMKrFUaIlykvULZaZapUP8v3MSj1+4SScs/+XqGqUXwVwTJX5dpUVz/PSvSl6yjrvoiluPfvukZY1A2yoCUsKXuurt/9Xf03H7EkyHkzNw+tXZa1YRmY28vxVFOOsoQFx1jYH6L16XhpF7CAdkRzWHLFwn7O9c/t7ndTk1WkjrqPpTNZ9Oekxr+7NlmHWXSpqme9L39Gc1gsBlnm7e7BUWJ1DLOkEyz8Z0zqzWPXfsRSoBDLF2yX3CnzfFeeKjL0fzj207ntgiEL/5hUp3K3iEWXyB9MERbzR5L7o6MULWVJ/bGf2e9bJaXd455MsKxhu3zlaJJF9TFjz/JXh6j9fcdYVoBlBVlwhIX9S1H3Cn//YTsmP0fDh0mIxXwRWof2b45i6jpXXwIsTrt444eg9z6ZbcdkiRay/BJq13W+VsZYIPNQUvpIkiUsg86EWYBWXq41rOOftTLe11C92SVBljGdidkxwNI8KAF1+29YQu0i+xp9NPNZBEyUxdH9fHeoMlg3wYL+ovsjLKwk9WGXJ7P6mNSZEX3RJXu/7a+VqRMsNUNsbjmplfG+Vl37VtU9ppWWzkRZjO7zPnYvKyr7VGbqFhv7y+Yw4ywIU1re57EUns647aFL3sVWoD0+1v1Rm+yXiHW1Md0fSjTBIv9I31WpW/f/SvenWdh8rer6pIjpflBnXBZH93831NcNp50+1f05LLyrbX6TGTYA+jMBrWwfiEyyLNXKcRbvfYLKNsoQ8WdCut+cKRn03mGxbPJ/pvuR9wk9N5M+NQqx2Fq5/64zUKf5LB/pfqSsv/fFuM6sUYBl/Z+xfKSVkfcxowmyDPMDNHxoWKwYx+Vd4xT6xv8vLKys35eRPrbm/kwR1X02sewqlE7pi8sC5zpw3rZ47JsyYyb6Mup/oiJsk8W8YN/xdpnJ8rFWzrTVGe9p3T4f8T9RTCs5y3eVxVl0e2gWbNflf8LC/lxlxk3Il0Zx3d8fKGyHBfryxzlMkIWV9LCPsmh/xsSWNAvzXp4Uzun/1ywT7SL9z2cTjXEg2B7ajrUlQVAr01gf+1Qr59kEmwUhUrZFJMaBkkFXHH//SEZ0fyHLalT3ESFkPgt7/JgoWwX9T+T5+bLsK5J+qpVhewdZMh6yoFVFVt3bjl1NsaRZ1YdZmM6EtDK5oc9ZYvqinkszQihri3RzfT8f/YU7+c2BzGZh8zR0C8cF0BqwiA/372r1X+m+zUIoJXhz7d4/5Wu7FxHlXNTlTkxd4bzNY2EG+r2HcQFRIq2VX4MdY4asBnYL/Se6T66H5/nR7+6Jfpn54MatczbCwsXz3IbiNcgd+/LNB2SZYcdGYxyK5b1t3LGryyK5kvksnOYBqm3HzRyWWx339yHLEt0nuyR3GUyZROYBYRYeF7j5LCGduV/ppyyjWkk2HsvaMNFgnWMsGaLXO+hORmecN5+GxdP9KX2Z0P0EtIdV0jkseHgfV88hxmHpDIiNv8hS3R+PoQ82mbyiLAxmuo9h533514DOgLXz/UnHk2UdzB8ZGD5jYfqAe3vsr+2S+jGqeB8T1SGnvc1SCJ0xLBL0hzp1Q6txlpEYuq/7hB6TIsjSkBn64rCsUvqTQJ1x8wCS14rYdUL/le4rG1A92hBLcqfzx77+maQvqDPuINp/U7tuVrsEWabWA+B8DGeVWqNwWZILdZ6bw4IQfV9yJ16j42byb7aPIAuOs0xopdd+pH7lhkHb5jy/0Hksbkkfa6cpnLhZcrtSu27GjoHx4vnSY7rvxtHYt+mzfCU7ap5j8zfzIiPtwkpyvTk2wI6bFc25wiGWsFZ+sh5ANr3Psi6Sm/IBMK1Ph8Phm7/Yv11Fx8YRrs6Nbc/sPIBiS5z8pEkWBJ5zYuihdkHk0cK5DGdJtlTNh7vXbj+8dq9vGu97GXPrtpE8gHVzqP6k+4Al4CPTn3tizWFkH+PllkqWHz19S1RI6fKkrla67VQdmnVAZ5gN2FZW3SJaieJa6cQ4wiynSwLsmCp7KtrttIN5GcnlTeMsKKu2lj2z8gDajg5aOcESaL9RFvE87xRhFjaHEjG+X3+ukzyoxbKCfY527fC8lQew/YenWObG0AM2mfeJR4wleXC7RWgfiFdumasTaRdezX/bxNUZuUZLSGAO49TxjyznGEshv36y2SbWOFJMuxOJs7B5AHHzzSQLaxi/XVwWL8axIA+AGaqkACwmRy45EwvGtXcMZoQF8abx8wDY76RTLLO0MszCvKkcsBTtXtf5yfUkkzDAdvOWibNwq5HoPAGTB3CrUrddpnV/wXoAppubz/LLw+Cizj9cZ2TLQB3anSbmAfSm7ZnRmR/i2mRPX+IsIO4cZFn1JqZqciNfuH4rW3wgPB7GYaA90zDxeQD50c9rnblssrm6P/Wcz4IIeumcEcOS9BvCBpLoWc2JP89hPNusYEbmNGRzAXkAJcrsOsJ4MoybLdIXZnMfPsuWT2ozcuoZSynnOpst1Ew+B+Uwo3EBUro607zJ8CFaopVzYujVudVxmWGefJJzS7I5PN9pKubLm20OWWTLjMc4aNfkVh6AcjBxxEeOscxcD2ATKI/lctWxch551rEopTPOvE3ozGiMg0/FEwNTFE/6QbvMzGmo3j7LfROI+2fXrdsXjc5M+Gz0KZ6XcbN817kToGAdP1wPoCcTkx1YMHOcvLi/0hmXxdaZmP9JOp7+qPIAkqPVHiO6/8l6AL3uk9xrF4sFD3VSOuOwWDozEhc4DnkAzZnaLB9qZWiugzmL2y7rZH8NsmidcVkGnRlhoedG+DP8H97L9OL0bJZwX3TXA3B12oF2WbOxH2ZROuOyFLnWmbF4De12ufZnevLBHCaoqZCl22n7ZHRfjM/gOpnQGTAHXWudGY89IWHPuM40ZbVa2i5z1gNw9TZ5yaZdblEWS2eG+XSudGYivlmJdDRuzZhnGrXJf1gP4CzAJjNX6xRfiw34M3nEn4FxASpyhDjMjaRhlvRj3Vd9LIft0l9H1pV9fyZPwv4MaBc+3m5SZ9pjvYglrvvOczwFCbK8eCwrmp9BoD+TK2s2zYLrYy505v6slrHMigtU3d3TykfttB9gWWWOzmhf2PdnfBb23z3va6Yz+WVD5tdxbgxdRU2cdnn+w2MsUmcgi+/PhFhYF93zpfNiV4fqGLFjM1mq7zZ39SVvDvU4ixgzkGXQmVHfmfWzHYeRQ2amTR5hsZ4n5Jm7Y5+1/6maYLF1Zoi5uv5MNFab1seWWbPmWeEFuh/ri9bzFJcFYGmFSR5nETrjxm4L4M+MrHdWz4bDsP/mj1rpsLDp2LF11/qS5riZZvH9mcLzZ2IsmZico2RPtChZdgy2x4L1gOrUt4WbW3wvMRnqzPsB+webWKtm1DBuHMD2Z+IsrGvvC5Tcat8mL2JxtbLqbmvAcjkQi4VW1otY4ygl2p9x8pan4mb65/rGTPOxjuoLHPuR8WI/X31fCsDSn4Y1Pkzr97kUr/O5PD9pjYdxIGFgDnYsbgZj6PWLdbMzdeIrS1lc3a+fTQ72eJd2nh+brrX26/77L4X+jMuiYeDY99YDqjPzZ97UruPydrH72L8yGfKjpRn7tvcP0p+7sdmqrn1tvnfpz4A8f6UzcA7ksbC5Zo5aNTahj+yx6HaIs1Dqrb/c0spi4YtJIKdh3Yo5zuDPwD0LsmUm24XnBxaoqV2W4Nifo/uEXuG6GNwLybTUz8/YYa0jXGf8PQscZmxdU/+M6wbd/2FTx0Cu/FS8xjxP0E/jsuS77zpzmdX+JCd/hnlT0J+BOjOdv8ldjn93tGX2JI2yxHQfamVGNw/A0ryuFObLHr12EUkhi3Um1E643qK+xl67eOUEy4pNkvvWZdnxDVFAh/DRbhcVF2AwUGdi6zPxPsZfdY+OdVwrM/29T7FUP5dhfwevY3Psqgz6nxkPb3l5gCpdx9KZ2PrMKAte1UdUVn+ew5Dq9+6y7J7U3z/IxujR9leUDimYbHJ9ZpwlXVUP9KR/1f2K3lqHpf09WXsirLklg4Frs3khYQadAeszIG4WsMmKBdMzOuhG/pAF19/3xGJhtvTNp66h9WYG4+UBSphBZ7w8AMefibCIbkW/UUcDLNP5f7qktUiHG/z8tqQkMNeR/+cRaiYrGQwe/Bk/D8D2Z+IsKffU0XWcRdcprJUpPYkwn9lP0Pa0DsWeZInM/gqrr3GYmf5MjEW9f0Ub3ybPYJE2l6Dn3WZp990/gqMsUzqDrjButk7m+DOa8YpwiCWzy5hNZu36suvW7h81xcG5jmLTOuPYAKMzOJvSmZE+xv/+BuGR+dgYC6bkebHrtj/KAzai7cLKo82ydnUGT+rMOAvHiLFM6X7FPH3FInLuX9+Uhp6z/X1bZ8yecAWTmrjZojwA7LwfYRhnwbR63pKBpXkdEI340gMLsXVGsRQTOpOP5wG4LAjmZUz1sZVqlvvQ79v+gJX0xvpYanQGsHzlozozkQeAh59ZiZERULs9RvUF8yNHdK41+z/7w4amlq5gLPLWxGtgEX//mIDcLLG1Ve8D+CQPwH4fc9O8hIXHLEzuCA/Z9W9MiK2RtKrNqyJuOwGdET7yiM5M5wE472+4aM6wyUO78H356vtjr20H9J7W7/KXvY7s9ftbdrXl8xoYJwY76EwGdCaP6ky4PPHpzGwWNkZp1Se51sjjpqZunIa+94nzumyMnwh1RsUuBn8G5JvNzwNQ47VD7E8tYEHf2p9sm19SE+yykM7uI2r/RapZMkdn9HPQn4Hz6ll5ALza5IDOdJzFstmEdL3qI/ddWQkUd05Z7yEL64m1+VzozNpliemM+f3o+owXa3qiRzU19tXnGb3yky7Z/1Xs+x9aDbpuWGjnseRfLTJxL64zgKVYh3XGzwOYGjfcOZMLmjGtHNqFkh+eD50nzfb3XVUZzPcXdu4c8FeSt1mTZTCQxdMZLxcV6Ex0noaZ29xzmEndz6ruxWUyv7yem4r6exfkOmaZ+DqRMPdPx/+1ztg6H9KZ3Dp70tWZkO7ruNmLh5omdT+lVcknlU1/fpNKxORCLBzG6SOiffIDNfPno8w9ceYsAZ2xWcJ5AAH7husbDwJOjBdM/r2Zl59sy+8r4SeaDizAn1QwFksuYDSz0hl3/uXHzT7JA5BBwKaesMmkRq8muZSnDdLx/Ng6gIQBY5jDqOekcwbmkkZnhjwAR4csncEjLMyUNqjA2TgLKZv740oJ0wsc+NyeH9Rl4utEbkImUmfgvFjrzPI8ANfPRKsC5W86Grs4PR5XPsfCZm4Pc+QHX5rDwDOS8uJgdIR3My8uBuJmH+YBsHF9yFEezs/Q42WzIZWdizrCgjiMx/KVHMy+ZQbj+StKZ/6YB8BcTL7YlEuhielLpv2ScN9yYhwcJrAP42DrjBcXkzozNw8gUvJpv1gGvNUWSwr0ZWL9H/ifDMZnyR2d8eNiHGZuHkCcJeOb6sXSuW40s7bhs4CxnwZYbJ2xmFydcftYRGcW5gFkci/dXiY1pJE+tpBl0BlnzWmxznyUB0BPTSHSTaL+PmAJ6/4QH5MwwDYzGPV5Oq4z0+szIyy4erZfiLlYFdSPiXbx9EWXWmfcfCajM6mjMznQmaV5AMD/r48ir1mmaCFQ17kstm22dWbIZzI6g8Z0ZioPIKaVJqeBp2h9FTJ5bhgvDsuMXAbDIkTTsOi9+VJnMhU383TGi5uF8wCmWMQmGvTF0xpxFmeBY9/OfaHE6FCKXJ3R9weEdWaYi0J/JpwHMOnPiF3OKE+YbKKIHYN9L2Nd4dlvt9ue/8OK89U+C6EadGZg4d1M68GwPjOUY3GzCZ2xYoD1MVepwDSiLz4L/QbRl/sZD/Zs0BnFsnZ1BkV0xuRZztYZyJLxVGCdpB3TFzBe6Hcj62jW/JL2OcSSoM6sgc6kR5/l8zwAiwWLJG1xHkBTVhEWOF6qG2QRW++07gCdWQOdmcoDmL0+A200xjx9Xp7XnPckzALtGH3fPZYk+TYxWNefWRud0fGdUX9mOg8gysIated2EPGzpfnGCaOVaVxf5MEILksut/IKe+XojI7DKJ3ReQDOmQYWTDp7n2aAhXZiv6fYp9mch3MZR1jEKQ8mn8ysOZQqLpbZ/ozllxzUuRxqfQbEombnAYyw8M1A/LuR584cUTZjDsNh1l+AZS1gxLzN0hn7PAYO4+cBmHJRHkCYRa/Jy62Nu44E15td3WcwLWyXNc9b1M8xA/DlsfCWGfIA3N9PVB7A/PWZIAtVeygkTP6kgCU0h5GHiUAWBqN1CPozok4BnYF5ADGd8ddnwu2itjaqc2f4PuPp+ZiGAf2+NGdUap1xYrC+P+P+vp8H4OrQmD8jq5upTaf6HM2mo5M5JkxHzo3PwmH056XPMuhMBnRmKg/AX5+BpYqjkbf4jofzzURfmfL3BYy35lAS/ZzUGRAb1/7MkAegbfOneQCAJSXiO1zz/TNSN5iOT63/ywN4PNsqTTOvq4ybKR0yLAomW43nAeCwzuRxndHxTcRn//K8Zn3u3A8ZZeElh/HPWjM6I+NmgEXrzLA+47bLVB5AXGdMrFaec2af15zcqikWqTOQxeiMCjW58wOtM3L/Jl/SACzKn4mdBzDs0wyOfWHT+YTRPq+Z/x8nMhUfEy3jsUidEZpo/Bn7+1Vxs0geQDGqM2uzTzNsx/j79OSe1yzOttv+G2MR5aAzts77OuP0FQZj9tV6eQDj/sza7NOM9jFxVIt9XrM6D4bnJoz7+0ZnDEuehHTGsa2Dzvh5AOPrM2uzPhNjyfgqxXBEIzIsrGmmYhcKBsy/PJ1xbURAZ5y+GM0DWHvrM34fk2foWOdoFrpuHQ2x2HmyUmdcFmWaB52Bc0lPZ6byAByWgM7Ya070bR1njAzLOt/WYRYTgxUwcM0C6ow3x9c6syKL8gD0FXGezjjrZ/pIMHles2Fhc5pDNcIidcZfswA64+kQ1JlwHoB/7kxsfcZlOagzLez7NKXWbe15me/fCJ0xLLn6PVdnPJbCjZtN5gFoxtj6jMNC0FY3xaAzSrebczXCImBAXfnvDTpTlyBvuXDXZ9DcPAD7fiZXZ9w12qpsTB9L4HnNZn+XpfsDE4Y6I9unNLGmQWcsH2xGHoC3T9O+n8nRGcsmI7lTyu6T7nnN8lBQf11MlYPO2HH+UuuAMs0uywfrM2snRmvrDFg7J7+t/bxzXvPXlzQt4f39ns7ouGVJwuszBdSZmeszuXsvUzwPQIVX4+c1vzaxuw1YX5EwXwO7gtHPjeYB6HyzeNxMiia8Y2rQGcCSbV72c0xvELwr94eGWfiZOVJnwF3HCmYqD0D7M1PrM5Bl0BmYn0F/XJZiuBdAf8/q8Gk/hp4iV2e0TZcwMA/A0qHRPACYb+bd/WV0BrLIw6dD9wIMdxgnr1CsVpxl5MTNhjh/SdBIHkAxuj7j6Yx3z1w0biaOBZ+8t1meDwB0JlXWTO9btrS2JHq9uZqbB5BHdQayxOJmrC52+8nnnfs0ZcmP0g+xWP6Mc2/gmWSxPACwPgP3aU75M/H1GSzO5hruC/R1RjPdKu98QFkXfpGNx8KPRlS+lwrG2WcXs1endSJLH35dk8vbfI5D6zO3E/Fzswj3lQs4vkL3NicPmbcJ9qAy23q9Wyz6i+mI3o9BTm67iDq11OwrR2e/rslOr++kqyp01v7RH/upuH4idJ+mf9dx0ZxrHGARyTaJdYeIKHs1txBr5zdfZ34rUwcx/QB1bctqpT8XFzKBz+8HGmDhyxGwXcT9M4PoGKb9uwqwZIikN3jm6sXE3Lk9uu7hHvqdfZ4P+bnDe8x7+3NatmC9uS0zL6dRXNkSuo8WhVjEZTrGJtu+NEHqLHz96juSWeNKnCRpvdrjRuu3zCt835zPm9I9u4geLs7nlzNCkAXxy3RsrTTtE7m3OenV5nc9Nk0OF8WdOIBcnEP+3lCHhd/nu3mrA8rZq0PU/V7h59T//Po9fH6Vt0QDlqr3x76lMzm8t3nNL6AKsIi8cuuVufaOP+ecHp9Cm5q6p8uvVt7n1Pk88PvkOPPeZmtPLz/7IsRi1R3a7lAOSqiM7++fUfKrwYLtAu9ttv2U5knTMAs4j9FjmX7uDyxM63LPJqsSxViYNP/ouftsFpCP9r9gOeztM/ZcJhRl4ZcDyrOiYAw9WscgS/rRHbrhEleHffIVYwnc22zNq/gVlHEWOF7GWT5vl8He8Sso/fXoofTubXZiFZd3PXvsf3Zvc7z0dB+Jy0HDdkyW8N5mh4WNm0Od2izT7eI+N3Vv8yKW+n3JI3ZMMul7zlyW4U6qvTovLhbjGLd3ARanXZb0OX6hrm/HfJ0Zux/4fqhntEvM3nksDuMiG+CwhG3z5L3NPLEm8zRwlr7A7/0vLPwS6imW4L3NX26Mo31g5x6nBVr5x3YZ7Bif4E6yWP6Mt6at45Z5ctxQbDGE5zBLdT82XgLvi4vbQ7bYZRnuBfBiROaOXfZ531XOuX8oNF6W6f6SsV91fWzMDyzr4f4ZaJPdGEeyO1Tan4yN/UmWD+3YilSHXYAl91hi9zbDGEdyLyvuvs7VygDLh3MaTGl5n+5jU/c22yzrvO1PlbMm6LJAfRnX/fksWXXtW9efjLKY9Rmnj3l37ArfjXe1QFwgyDKu+/NZ+DkKecwXgyzSn4G678cFRNH8EhG8mGIJaOWH7ULFhXUxBif3IZE6E2BxGHTJbPRuI/Z0LdX9VWa313ybXG92SXzMeyzcn4loZQ6Y5HMPOsP/jNRxnMVjI+Rh1zVqx6w8gNB8TNR9ba9DW/7nN47so53Sl2UsBL/3Ywx+u/C4GdB9EKuFLHmSvzpE/3MW8D5F71ew7mMsw73Na2CjI740L++Pjpjz/ubFOAJ1HrFvlHaP+zwW5/pc5PYlGEMPsbDX7tE5Z+B+oPtRHw2T6vRQcc3h+w/rDLgKOHRv8xiLmnu2u8emJrAvfTqHsRlJvXmoI3oWtkvw3mZvXcDd36/Y2t0vw0HYYfH8mYX6wkRy87tTx6PP1X2oM67uz2Fhr/Zy7Go2xfmrVur3Vytan46XNgd1nGPHZOnf2wxj6F4fM8x5ce/fdeXdHwBZZtkxjKr63d+LSVscZzF5zZ6+xPwcuHa+L3FFLIYPWUiFS+8e5mXtkif/B/tOFIo/Yh64AAAAAElFTkSuQmCC" alt="Icon" />
                </div>

              </div>
              <p className='text'>Privilege Document Report</p>
              <div className='white-box'>
                <strong className='notification'>Online Notification</strong>
                <p className='ex'>XXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXX</p>
                <p className='newdate'>2026/1/1</p>
                <p className='ex'>XXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXX</p>
                <p className='newdate'>26/1/1</p>
                <p className='ex'>XXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXX</p>
                <p className='newdate'>26/1/1</p>
                <button
                  className="more"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  More
                </button>
                <div className="icon-help">
                  <img src="data:image/png;base64,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" alt="Icon" />
                </div>
              </div>
            </div>


            <div className="featured-content">
              <h3>Featured Content Name</h3>
              <p className='exes'>XXXXXXXXXXX<br />XXXXXXXXXXX</p>
              Learn More
              <input type="text" className="textbox" />
            </div>
            <div className="announcement">
              <text>Rapidus Customer Portal will be unavailable from 2026/4/1 3:00 to ...</text>
              <div>
                <button className='red'>Notice</button>
                <span className='date'> 2026/1/1</span>
                <p >XXXXXXXXXXX<br />XXXXXXXXXXX</p>
                <button className='red'>Notice</button>
                <span className='date'>2026/1/1</span>
              </div>
            </div>

            <div className='try'>
              <h2>Favourite Function     </h2>
            </div>
            <div className="fav">

              <div className="column">
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/34_1-1024.png" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Document AAA</strong><br />
                    <span>Document</span>
                  </div>
                </div>
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/34_1-1024.png" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Document BBB</strong><br />
                    <span>Document</span>
                  </div>
                </div>
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="data:image/png;base64,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" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Content Name</strong><br />
                    <span>MPW (Shuttle)</span>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="https://media.deloitte.com/is/image/deloitte/za-fin-crime-academy-inline2?$Responsive$&fmt=webp&fit=stretch,1&wid=293&dpr=off" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Content Name</strong><br />
                    <span>Design Portal</span>
                  </div>
                </div>
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="https://media.deloitte.com/is/image/deloitte/za-fin-crime-academy-inline2?$Responsive$&fmt=webp&fit=stretch,1&wid=293&dpr=off" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Content Name</strong><br />
                    <span>Design Portal</span>
                  </div>
                </div>
                <div className="function-card">
                  <div className="icon-medium">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLw2wivITzuEmE_tZmpGY-2FAU8hm1Z41gt-xZM3WtwzCHV9xwTydAUWARtEp8d7dFLM&usqp=CAU" alt="Icon" />
                  </div>
                  <div className='text'>
                    <strong>Content Name</strong><br />
                    <span>Content Name</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>


      </div>

    </div>
  );
};

export default RapidusHome;
