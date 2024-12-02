(function () {
    // 初始化格式化区域高度用于设置滚动条
    // --------------------------------------------------------------------
    // document.getElementById('jsonFormatArea').style.height = document.getElementById('jsonFormatArea').clientHeight + 'px';
    // 初始化json格式化区域滚动
    // --------------------------------------------------------------------
    // new PerfectScrollbar(document.getElementById('jsonFormatArea'), {
    //     wheelPropagation: false,
    // });
    setTimeout(() => {
        $('#json-src').focus();
    });


    const textarea = document.querySelector("#json-src");
    autosize(textarea);

    // 初始化drag功能
    // ---------------------------------------------------------------------
    let totalWidth = $('#dragParent').outerWidth(); // 拖动区域宽度
    let gapWidth = $('#dragEle').outerWidth() / 2; // 拖动条宽度
    let forbidenWidth = totalWidth - 400; // 左侧区域最大宽度

    const DRAG = $('#dragEle').myDrag({
        parent: 'parent',
        randomPosition: false,
        direction: 'x',
        handler: false,
        min: 200,
        max: 400,
        dragStart: function (x, y) {
            resizeDragCalc();
        },
        dragEnd: function (x, y) {
            // console.log('dragEnd')
            if (x > forbidenWidth) {
                const leftPx = forbidenWidth + gapWidth;
                const dLeftP = forbidenWidth / totalWidth * 100;
                const leftP = leftPx / totalWidth * 100;
                const rightP = 100 - leftP;
                $('#dragEle').css('left', dLeftP + '%');
                $('.input-area').css('width', leftP + '%');
                $('.format-area').css('width', rightP + '%');
            } else if (x < 200) {
                const leftPx = 200 + gapWidth;
                const dLeftP = 200 / totalWidth * 100;
                const leftP = leftPx / totalWidth * 100;
                const rightP = 100 - leftP;
                $('#dragEle').css('left', dLeftP + '%');
                $('.input-area').css('width', leftP + '%');
                $('.format-area').css('width', rightP + '%');
            } else {
                const leftPx = x + gapWidth;
                const dLeftP = x / totalWidth * 100;
                const leftP = leftPx / totalWidth * 100;
                const rightP = 100 - leftP;
                $('#dragEle').css('left', dLeftP + '%');
                $('.input-area').css('width', leftP + '%');
                $('.format-area').css('width', rightP + '%');
            }
        },
        dragMove: function (x, y) {
            // console.log('dragMove')
            if (x <= forbidenWidth && x >= 200) {
                const leftPx = x + gapWidth;
                const dLeftP = x / totalWidth * 100;
                const leftP = leftPx / totalWidth * 100;
                const rightP = 100 - leftP;
                $('#dragEle').css('left', dLeftP + '%');
                $('.input-area').css('width', leftP + '%');
                $('.format-area').css('width', rightP + '%');
            }
        }
    });

    function resizeDragCalc() {
        totalWidth = $('#dragParent').outerWidth();
        // console.log(totalWidth)
        forbidenWidth = totalWidth - 400;
    }

    function initIconTitle (unChange) {
        if (unChange !== 'zip') {
            $('.zip').attr('title', '压缩');
            $('.zip').attr('data-bs-original-title', '压缩');
        }
        if (unChange !== 'xml') {
            $('.xml').attr('title', '转XML');
            $('.xml').attr('data-bs-original-title', '转XML');
        }
    }

    // 窗口resize时重新计算
    $(window).resize(function () {
        resizeDragCalc()
    });

    // 初始化全屏按钮
    // 必须初始化这个按钮以便使用脚本控制显示隐藏
    const fullscreenTooltipEl = document.getElementById('formatFullScreen')
    const fullscreenTooltip = bootstrap.Tooltip.getOrCreateInstance(fullscreenTooltipEl)

    function getQueryParams() {
        var search = window.location.search.substring(1) || window.location.href.split('?')[1];
        var query = {};
        if (search) {
            search.split('&').forEach(function (pair) {
                var keyValue = pair.split('=');
                query[keyValue[0]] = decodeURIComponent(keyValue[1] || '');
            });
        }

        return query;
    }
    function getHashParameters() {
        var hash = window.location.hash.substr(1);
        var result = {};
        hash.split('&').forEach(function(part) {
            var item = part.split('=');
            if (item.length === 2) {
                result[item[0]] = decodeURIComponent(item[1]);
            }
        });
        return result;
    }
    function removeHashParams(paramsToRemove) {
        let hashParams = getHashParameters();

        // 删除指定的参数
        paramsToRemove.forEach(param => {
            delete hashParams[param];
        });

        // 重新构建 hash 字符串
        let newHash = Object.keys(hashParams)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(hashParams[key]))
            .join('&');

        // 更新 URL，但不刷新页面
        if (newHash) {
            history.replaceState(null, null, '#' + newHash);
        } else {
            // 如果没有剩余的参数，完全移除 hash
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }

        return hashParams; // 返回更新后的参数对象
    }

    const hashParams = getHashParameters();
    const urlParams = getQueryParams();

    // 格式化区域全屏
    $('#formatFullScreen').click(function (e) {
        $('html').toggleClass('format-fullscreen');
        if ($('html').hasClass('format-fullscreen')) {
            $('#formatFullScreen').attr('data-bs-original-title', '最小化');
        } else {
            $('#formatFullScreen').attr('data-bs-original-title', '全屏');
        }
        $('#formatFullScreen .ti').toggleClass('ti-arrows-minimize');
        $('#formatFullScreen .ti').toggleClass('ti-arrows-maximize');
        fullscreenTooltip.hide();
        setTimeout(() => {
            resizeDragCalc();
            DRAG.initSize();
        }, 0)
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 27 || event.key === 'Escape') {
            if ($('html').hasClass('format-fullscreen')) {
                $('html').removeClass('format-fullscreen');
                $('#formatFullScreen').attr('data-bs-original-title', '全屏');
                $('#formatFullScreen .ti').toggleClass('ti-arrows-minimize');
                $('#formatFullScreen .ti').toggleClass('ti-arrows-maximize');
                fullscreenTooltip.hide();
                setTimeout(() => {
                    resizeDragCalc();
                    DRAG.initSize();
                }, 0)
            }
        }
    });



    // $('.tip-mask').click(function () {
    //     $(this).remove();
    //     $('.old-version-tip').removeClass('old-version-tip');
    //     $('.old-version').attr('href', $('.old-version').attr('data-href'));
    // });
    // $('.old-version-tip').click(function () {
    //     $(this).remove();
    //     $('.old-version').attr('href', $('.old-version').attr('data-href'));
    //     $('.tip-mask').removeClass('old-version-tip');
    //     window.localStorage.setItem('show-version-tip', '1')
    // });

    var current_json = '';
    var current_content = '';
    var current_json_str = '';
    var xml_flag = false;
    var zip_flag = false;
    var shown_flag = false;
    var compress_flag = false;

    function init() {
        xml_flag = false;
        zip_flag = false;
        // shown_flag = false;
        compress_flag = false;
        isXml = false;
        $('.top-btn-area button').removeClass('text-success');
        renderLine();
        initIconTitle();
    }

    function formatJsonStr(origin_data) {
        let stringedJSON = origin_data.replace(/([^\\]\")\s*:\s*([-+Ee0-9.]+)\s*(,)?/g, '$1: "jsondotcnprefix$2"$3');
        stringedJSON = stringedJSON.replace(/(\[)\s*([-+Ee0-9.]+)\s*(,)?\s*(\])?/g, '$1"jsondotcnprefix$2"$3$4');
        stringedJSON = stringedJSON.replace(/(,)\s*([-+Ee0-9.]+)\s*(\])?/g, '$1"jsondotcnprefix$2"$3');
        stringedJSON = stringedJSON.replace(/\"([-+Ee0-9.]+)\"\s*:\s*/g, '"jsondotcnprefixyxp$1": ');

        return stringedJSON;
    };

    function countChineseCharactersAndPunctuation(str) {
        // 使用正则表达式匹配中文字符和中文标点符号
        var regex = /[\u4e00-\u9fa5\u3000-\u303f\uff01-\uffee]/g;
        var matches = str.match(regex);

        // 返回匹配到的数量
        return matches ? matches.length : 0;
    }

    function calcMaxWordsWidth(txt) {
        const txtLength = txt.length;
        const chineseTxtLength = countChineseCharactersAndPunctuation(txt);
        return chineseTxtLength * 16 + (txtLength - chineseTxtLength) * 8;
    }

    // textarea默认每一列大概是8像素，中文和中文字符根据fontsize计算，英文直接8像素计算
    function calcMaxWords(txt) {
        let txtWidth = 0;
        let maxTxt = '';
        const txtArr = txt.split('\n');
        for (let i = 0; i < txtArr.length; i++) {
            const currentTxtWidth = calcMaxWordsWidth(txtArr[i]);
            if (currentTxtWidth > txtWidth) {
                txtWidth = currentTxtWidth;
                maxTxt = txtArr[i];
            }
        }
        const chineseTxtLength = countChineseCharactersAndPunctuation(maxTxt);
        return parseInt(chineseTxtLength * 15 / 8 + (maxTxt.length - chineseTxtLength));
    }

    $('#cancelZY').click(function () {
        init();
        var content = $.trim($('#json-src').val());
        var result = '';
        if (content != '') {
            //如果是xml,那么转换为json
            if (content.substr(0, 1) === '<' && content.substr(-1, 1) === '>') {
                try {
                    var json_obj = $.xml2json(content);
                    content = JSON.stringify(json_obj);
                } catch (e) {
                    result = '解析错误：<span style="color: #f1592a;font-weight:bold;">' + e.message + '</span>';
                    current_json_str = result;
                    $('#json-target').html(result);
                    return false;
                }

            }
            try {
                var hasZY = $('#cancelZY').prop('checked');
                let parseContent = content;
                if (hasZY) {
                    parseContent = parseContent.replace(/\\/g, '\\\\');
                    parseContent = parseContent.replace(/\\"/g, '\\\\"');
                }

                current_json = jsonlint.parse(parseContent);
                current_json_str = parseContent;
                // current_json_str = content.replace(/\s/g, '');
                current_json_str = current_json_str.replace(/[\r\n]/g, '');
                //current_json = JSON.parse(content);
                current_content = parseContent;
                result = new JSONFormat(parseContent, 4).toString();
            } catch (e) {
                result = '<span style="color: #f1592a;font-weight:bold;">' + e + '</span>';
                current_json_str = result;
            }

            result = result.replace(/&/g, '&amp;');
            result = result.replace(/%yxpnbspyxp;/g, '&nbsp;');
            result = result.replace(/%yxplt;/g, '&lt;');
            result = result.replace(/%yxpgt;/g, '&gt;');
            $('#json-target').html(result);
        } else {
            $('#json-target').html('');
        }
    });

    var isXml = false;
    $('#json-src').keyup(function () {
        init();
        var content = $.trim($(this).val());
        var result = '';
        if (content != '') {
            $('#jsonFormatArea .editable-tip').hide();
            if (shown_flag) {
                document.getElementById('json-src').cols = calcMaxWords(content);
            }

            //如果是xml,那么转换为json
            if (content.substr(0, 1) === '<' && content.substr(-1, 1) === '>') {
                isXml = true;
                try {
                    var json_obj = $.xml2json(content);
                    content = JSON.stringify(json_obj);
                } catch (e) {
                    result = '解析错误：<span style="color: #f1592a;font-weight:bold;">' + e.message + '</span>';
                    current_json_str = result;
                    $('#json-target').html(result);
                    return false;
                }

            }

            try {
                var hasZY = $('#cancelZY').prop('checked');
                let parseContent = content;
                if (hasZY) {
                    parseContent = parseContent.replace(/\\/g, '\\\\');
                    parseContent = parseContent.replace(/\\"/g, '\\\\"');
                }
                current_json = jsonlint.parse(parseContent);
                current_json_str = parseContent;
                // current_json_str = content.replace(/\s/g, '');
                current_json_str = current_json_str.replace(/[\r\n]/g, '');

                //current_json = JSON.parse(content);
                current_content = parseContent;
                result = new JSONFormat(parseContent, 4).toString();
            } catch (e) {
                result = '<span style="color: #f1592a;font-weight:bold;">' + e + '</span>';
                current_json_str = result;
            }
            result = result.replace(/&/g, '&amp;');
            result = result.replace(/%yxpnbspyxp;/g, '&nbsp;');
            result = result.replace(/%yxplt;/g, '&lt;');
            result = result.replace(/%yxpgt;/g, '&gt;');
            $('#json-target').html(result);
        } else {
            document.getElementById('json-src').cols = '';
            $('#jsonFormatArea .editable-tip').show();
            $('#json-target').html('');
        }
        setTimeout(() => {
            renderLine()
        }, 0);
    });

    //主入口
    function getRealJsonData(baseStr) {
        if (!baseStr || typeof baseStr != 'string') return;
        var jsonData = null;
        try {
            jsonData = JSON.parse(baseStr);
        } catch (err) {
            return null;
        }
        var needReplaceStrs = [];
        loopFindArrOrObj(jsonData, needReplaceStrs);
        needReplaceStrs.forEach(function (replaceInfo) {
            var matchArr = baseStr.match(eval('/"' + replaceInfo.key + '":[0-9]{15,}/'));
            if (matchArr) {
                var str = matchArr[0];
                var replaceStr = str.replace('"' + replaceInfo.key + '":', '"' + replaceInfo.key + '":"');
                replaceStr += '"';
                baseStr = baseStr.replace(str, replaceStr);
            }
        });
        var returnJson = null;
        returnJson = JSON.parse(baseStr);
        return returnJson;
    }
    //遍历对象类型的
    function getNeedRpStrByObj(obj, needReplaceStrs) {
        for (var key in obj) {
            var value = obj[key];
            if (typeof value == 'number' && value > 9007199254740992) {
                needReplaceStrs.push({ key: key });
            }
            loopFindArrOrObj(value, needReplaceStrs);
        }
    }
    //遍历数组类型的
    function getNeedRpStrByArr(arr, needReplaceStrs) {
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i];
            loopFindArrOrObj(value, needReplaceStrs);
        }
    }
    //递归遍历
    function loopFindArrOrObj(value, needRpStrArr) {
        var valueTypeof = Object.prototype.toString.call(value);
        if (valueTypeof == '[object Object]') {
            needRpStrArr.concat(getNeedRpStrByObj(value, needRpStrArr));
        }
        if (valueTypeof == '[object Array]') {
            needRpStrArr.concat(getNeedRpStrByArr(value, needRpStrArr));
        }
    }

    var keyCodePass = true;
    $("#jsonFormatArea").keydown(function (event) {
        if ((event.ctrlKey || event.metaKey) && event.keyCode === 67) {
            keyCodePass = false;
        } else if (event.keyCode >= 37 && event.keyCode <= 40) {
            keyCodePass = false;
        } else {
            keyCodePass = true;
        }
    });
    $('#jsonFormatArea').keyup(function (event) {
        if (keyCodePass) {
            var text = $('#json-target').html()
                .replace(/<br\/>/g, "\n")
                .replace(/<br>/g, "\n")
                .replace(/<[^>]+>/g, "")
                .replace(/&nbsp;/ig, " ")
                .replace(/&lt;/ig, "<")
                .replace(/&gt;/ig, ">")
                .replace(/&amp;/ig, "&")
                .replace(/Object{...}/ig, "")
                .replace(/Array\[[0-9]+\]/ig, "");
            if (!xml_flag) {
                $('#json-src').val(text);
                current_content = text;
                current_json = jsonlint.parse(current_content);
                current_json_str = JSON.stringify(current_json);
                // current_json_str = content.replace(/\s/g, '');
                current_json_str = current_json_str.replace(/[\r\n]/g, '');
                if (current_content && shown_flag) {
                    document.getElementById('json-src').cols = calcMaxWords(current_content);
                } else {
                    document.getElementById('json-src').cols = ""
                }
                setTimeout(() => {
                    autosize.update(textarea);
                    renderLine()
                }, 0)
            }
        }


    });

    $('.xml').click(function () {
        zip_flag = false;
        compress_flag = false;
        $('.top-btn-area button').removeClass('text-success');
        if (xml_flag) {
            $('#json-src').keyup();
            $(this).attr('title', '转XML');
            $(this).attr('data-bs-original-title', '转XML');
            setTimeout(() => {
                const textarea = document.querySelector("#autosize-demo");
                autosize.destroy(textarea);
            }, 0);
        } else {
            try {
                var result = $.json2xml(current_content);
                result = result.replace(/&/g, '&amp;');
                result = result.replace(/%yxpnbspyxp;/g, '&nbsp;');
                const nowrapClassName = shown_flag ? 'text-nowrap w-auto' : '';
                const colsNum = shown_flag ? calcMaxWords(result) : '';
                $('#json-target').html('<textarea class="xml-textarea ' + nowrapClassName + '" id="autosize-demo" cols="' + colsNum + '">' + result + '</textarea>');
                setTimeout(() => {
                    const textarea = document.querySelector("#autosize-demo");
                    autosize(textarea);
                    renderLine();
                }, 0);
                xml_flag = true;
                $(this).attr('title', '转JSON');
                $(this).attr('data-bs-original-title', '转JSON');
                $(this).addClass('text-success');
            } catch (e)  {

            }
        }
        initIconTitle('xml');
    });
    $('.shown').click(function () {
        if (!shown_flag) {
            renderLine();
            $('#lineNumContainer').show();
            // $('#line-num').addClass('d-flex');
            $('#line-numbers').addClass('d-flex');
            $('#jsonTxtAreaGap').show();
            $('#jsonFormatContainer').addClass('ps-2');
            shown_flag = true;
            $(this).attr('title', '隐藏行号');
            $(this).attr('data-bs-original-title', '隐藏行号');
            $(this).addClass('text-primary');
            $('#json-target').addClass('text-nowrap');
            $('#json-src').addClass('text-nowrap');
            $('#json-src').addClass('ps-0');
            document.getElementById('json-src').cols = calcMaxWords(current_content);
            if (xml_flag) {
                setTimeout(() => {
                    const textarea = document.querySelector("#autosize-demo");
                    if (textarea) {
                        const colsNum = calcMaxWords($('#autosize-demo').val());
                        $('#autosize-demo').addClass('text-nowrap w-auto');
                        document.getElementById('autosize-demo').cols = colsNum;
                        setTimeout(() => {
                            autosize.update(textarea);
                        }, 0)
                    }
                }, 0);
            }
        } else {
            $('#lineNumContainer').hide();
            // $('#line-num').removeClass('d-flex');
            $('#line-numbers').removeClass('d-flex');
            $('#jsonTxtAreaGap').hide();
            $('#jsonFormatContainer').removeClass('ps-2');
            shown_flag = false;
            $(this).attr('title', '显示行号');
            $(this).attr('data-bs-original-title', '显示行号');
            $(this).removeClass('text-primary');
            $('#json-target').removeClass('text-nowrap');
            $('#json-src').removeClass('text-nowrap');
            $('#json-src').removeClass('ps-0');
            document.getElementById('json-src').cols = '';
            if (xml_flag) {
                setTimeout(() => {
                    const textarea = document.querySelector("#autosize-demo");
                    if (textarea) {
                        $('#autosize-demo').removeClass('text-nowrap w-auto')
                        setTimeout(() => {
                            autosize.update(textarea);
                        }, 0)
                    }
                }, 0);
            }
        }
        setTimeout(() => {
            autosize.update(textarea);
        }, 0);
    });

    function renderLine() {
        var line_num = $('#json-target').height() / 20;
        $('#line-num').html("");
        var line_num_html = "";
        for (var i = 1; i < line_num + 1; i++) {
            line_num_html += "<div>" + i + "</div>";
        }
        $('#line-num').html(line_num_html);
    }

    $('.zip').click(function () {
        if (!current_content || current_content === "") {
            return
        }
        xml_flag = false;
        compress_flag = false;
        $('.top-btn-area button').removeClass('text-success');
        if (zip_flag) {
            $('#json-src').keyup();
            $(this).attr('title', '压缩');
            $(this).attr('data-bs-original-title', '压缩');
        } else {
            let stringedJSON = current_json_str;
            // const jsonStr = current_json_str.replace(/\s/g, '');
            stringedJSON = stringedJSON.replace(/(\")\s*((\\\"|[^"])*)\s*(\")/g, function(match, p1, p2, p3, p4) {
                // console.log(p2)
                var replaceStr = p2.replace(/\s/g, 'yxpnbsp');
                return p1 + replaceStr + p4;
            });
            stringedJSON = stringedJSON.replace(/\s/g, '');
            stringedJSON = stringedJSON.replace(/yxpnbsp/g, ' ');
            stringedJSON = stringedJSON.replace(/\\\\/g, '\\');
            //$('#json-target').html(current_json_str.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
            $('#json-target').html("<xmp class='mt-0'>" + stringedJSON + "</xmp>");
            zip_flag = true;
            $(this).attr('title', '格式化');
            $(this).attr('data-bs-original-title', '格式化');
            $(this).addClass('text-success');
        }
        initIconTitle('zip');
    });

    $('.clipboard-btn').click(function (){
        while ($(".ti-square-rounded-plus").length > 0) {
            $(".ti-square-rounded-plus").click();
        }
        compress_flag = false;
    });
    $('.compress').click(function () {
        if (xml_flag || zip_flag || !current_content || current_content === "") {
            return
        }
        if ($('#json-target i').eq(0).hasClass('ti-square-rounded-plus')) {
            compress_flag = true;
        }
        if (!compress_flag) {
            $(this).addClass('text-success');
            $($(".ti-square-rounded-minus").toArray().reverse()).click();
            compress_flag = true;
            $(this).attr('title', '展开');
            $(this).attr('data-bs-original-title', '展开');
        } else {
            while ($(".ti-square-rounded-plus").length > 0) {
                $(".ti-square-rounded-plus").click();
            }
            compress_flag = false;
            $(this).removeClass('text-success');
            $(this).attr('title', '折叠');
            $(this).attr('data-bs-original-title', '折叠');
        }
        initIconTitle();
    });
    $('.clear').click(function () {
        current_content = '';
        current_json = '';
        current_json_str = '';
        $('#json-src').val('');
        document.getElementById('json-src').cols = "";
        $('#json-target').html('');
        $('#line-numbers').html('<div>1</div>');
        $('#jsonFormatArea .editable-tip').show();
        setTimeout(() => {
            autosize.update(textarea);
        }, 0);
        init()
    });
    // 测试用例
    $('.example').click(function () {
        $('#json-src').val('{"title":"JSON在线解析","json.url":"https://www.json.cn","keywords":"JSON在线解析","功能":["JSON美化","JSON数据类型显示","JSON数组显示角标","高亮显示","错误提示","\\u003e","&nbsp;","\ ","<h1>JSON在线解析</h1>",{"备注":["www.json.cn","json.cn"]}],"加入我们":{"QQ群":661275469},"特殊符号":["&currency","&timestamp","&region","&params","&lt;&lt;sane&gt;&gt;","gbk -> utf-8","gbk -> utf-8"],"numbers":[305667554401374209,103248655202358790,123456789012345679,987654321098765432,246813579246813579,135792468013579246,864209864209864209,123456789098765432,987654321012345679,246813579135792468],"id2":22022621134265013,"BigNumber":71357798191653192098,"content":"永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。\\n是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。\\n夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！\\n每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔，悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。"}');
        $('#json-src').keyup();
        setTimeout(() => {
            autosize.update(textarea);
        }, 0);
    });

    // 左侧textarea滚动监听
    $('#jsonTxtAreaContainer').on('scroll', function (e) {
        if (shown_flag) {
            const scrollTop = $(this).scrollTop();
            $('#line-numbers').css('transform', `translate3d(0,-${scrollTop}px,0)`)
        }
    });
    // 右侧format滚动监听
    $('#jsonFormatContainer').on('scroll', function (e) {
        if (shown_flag) {
            const scrollTop = $(this).scrollTop();
            $('#line-num').css('transform', `translate3d(0,-${scrollTop}px,0)`)
        }
    });

    //读取share
    // console.log(getPar('share'));
    if (getPar('share')) {
        // 如果index.php没有配置不缓存，使用get请求会被缓存，百度云暂时不缓存post请求
        $.post("/index.php?is_ajax=1&s=api&app=blog&c=tran&m=read_share&sign=" + getPar('share'), function (data) {
            if (data.code == 1) {
                $("#json-src").val(data.data.content);
                $('#cancelZY').click();
                setTimeout(() => {
                    autosize.update(textarea);
                }, 0);
            }

        }, 'jsonp')
    }
    function getPar(par) {
        //获取当前URL
        var local_url = document.location.hash.replace('#', '');
        //获取要取得的get参数位置
        var get = local_url.indexOf(par + "=");
        if (get == -1) {
            return false;
        }
        //截取字符串
        var get_par = local_url.slice(par.length + get + 1);
        //判断截取后的字符串是否还有其他get参数
        var nextPar = get_par.indexOf("&");
        if (nextPar != -1) {
            get_par = get_par.slice(0, nextPar);
        }
        return get_par;
    }



    (function ($) {
        $.fn.innerText = function (msg) {
            if (msg) {
                if (document.body.innerText) {
                    for (var i in this) {
                        this[i].innerText = msg;
                    }
                } else {
                    for (var i in this) {
                        this[i].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
                    }
                }
                return this;
            } else {
                if (document.body.innerText) {
                    return this[0].innerText;
                } else {
                    return this[0].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
                }
            }
        };
    })(jQuery);
    $('.save').click(function () {
        // var content = JSON.stringify(current_json);
        // $('#txt-content').val(content);
        //var text = "hell world";
        var html = $('#json-target').html().replace(/\n/g, '<br/>').replace(/\n/g, '<br>');
        var text = $('#json-target').innerText().replace('　　', '    ');
        var blob = new Blob([text], { type: "application/json;charset=utf-8" });
        var timestamp = new Date().getTime();
        saveAs(blob, "format." + timestamp + ".json");
    });

    // hash参数
    if(hashParams){
        removeHashParams(['s', 'data', 'url']);
        // 根据 s 参数获取base64编码转换为json字符串插入编辑器
        if (hashParams.s) {
            try {
                $('#json-src').val(atob(hashParams.s));
            } catch (e) {
                toastR('base64解码失败！');
            }
        }
        // 根据 data 参数获取base64编码转换为json字符串插入编辑器
        if (hashParams.data) {
            $('#json-src').val(hashParams.data);
        }

        // 根据 url 参数获取网络json插入编辑器
        if (hashParams.url) {
            try {
                // 尝试解析经过base64编码的url
                // 如果url中带有参数可以将整个url转成base64传入工具
                hashParams.url = atob(hashParams.url);
            } catch (e) {
            }

            fetch(hashParams.url)  // 替换为你要请求的 URL
                .then(response => {
                    // console.log(response)
                    if (!response.ok) {
                        throw new Error(`请求JSON出错，状态码：${response.status}！`);
                    }
                    // return response.json(); // 将响应转换为 JSON 对象
                    return response.text();  // 仅使用原文，忠于原文，方便排查错误。
                })
                .then(data => {
                    // console.log(data); // 输出获取到的 JSON 数据
                    // $('#json-src').val(JSON.stringify(data));
                    $('#json-src').val(data);
                    setTimeout(() => {
                        autosize.update(textarea);
                        $('#json-src').keyup();
                    }, 0);
                })
                .catch(error => {
                    if (error.message && error.message.indexOf('请求JSON出错，状态码：') > -1) {
                        toastR(error.message);
                    } else {
                        toastR('请求JSON出错，请检查请求地址');
                    }
                });
        }
    }

    // 查询参数
    if (urlParams) {
        // 根据location.href获取是否全屏
        if (urlParams.fullscreen || urlParams.fullscreen === '') {
            $('#formatFullScreen').attr('data-bs-original-title', '最小化');
            $('#formatFullScreen .ti').toggleClass('ti-arrows-minimize');
            $('#formatFullScreen .ti').toggleClass('ti-arrows-maximize');
        }
    }
    setTimeout(() => {
        autosize.update(textarea);
        $('#json-src').keyup();
    }, 0);
    initClipboardBtn();
})();
