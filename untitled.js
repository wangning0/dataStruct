/**
 * Created by wangning on 16/8/17.
 */

myApp.controller('addPlanTotalHome',function ($scope,pageLoad,$state) {
    pageLoad.init(10,9);
    $scope.navName = '添加方案';
    if(sessionStorage.getItem('ifFromBack') == 'true') {
        sessionStorage.setItem('ifFromBack',false);
        $scope.title = '添加图片';
        $scope.stepone = true;
        $scope.steptwo = false;
        var _schemeId = sessionStorage.getItem('schemeId');
        pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:_schemeId},function (err, res) {
            if(err)
                alert(err)
            else {
                if(res.status == 0){
                    var arr = [];
                    res.body.forEach(function (item, index) {
                        var obj = {
                            imgUrl:item.imagepath,
                            id:item.id
                        };
                        arr.push(obj);
                    });
                    $scope.imgItems = arr;
                    $scope.$apply();
                } else {
                    alert('服务器出错');
                }
            }
        });
        $scope.handleBackStep = function () {
            $scope.stepone = false;
            $scope.steptwo = true;
            $scope.title = '基本信息';
            pageLoad.postRequest('/admin/scheme/findScheme',{schemeId:sessionStorage.getItem('schemeId')},function (err, res) {
               if(err) {
                   alert('服务器出错');
               } else {
                   if(res.status == 0) {
                       var data = {
                           schemename:$scope.planName,
                           city:$scope.address,
                           schemestyle:$scope.style,
                           schemeprice:$scope.price,
                           housetype:$scope.houseStyle,
                           area:$scope.area,
                           flashAddr:$scope.flashAddr,
                           introduce:$scope.introduce,
                           imgepath:$scope.imgepath
                       };
                       $scope.planName = res.body.schemename;
                       $scope.address = res.body.city;
                       $scope.style = res.body.schemestyle;
                       $scope.price = res.body.schemeprice;
                       $scope.houseStyle = res.body.housetype;
                       $scope.area = res.body.area;
                       $scope.flashAddr = res.body.flashAddr;
                       $scope.introduce = res.body.introduce;
                       $scope.imgepath = res.body.imgepath;
                       $scope.$apply();
                   } else {
                       alert('error');
                   }
               }
            })
        };
        $scope.cancleHandle = function () {
            $state.go("index.planManage");
        };
        $scope.rightHandle = function () {
            //交互
            $state.go("index.planManage");
        };
        $scope.handlePreview = function () {
            alert('预览部分暂未开放');
        };
        $scope.nextStepHandle = function () {
            /*
             *
             *     private String flashAddr;
             private String imgepath;
             //方案简介，供方案展示时使用
             private String introduce
             */
            var _priceType = Number($scope.price) == NaN ? false : true;
            var _areaType = Number($scope.area) == NaN ? false : true ;
            if($scope.planName && $scope.price && $scope.area && $scope.flashAddr && $scope.imgepath && $scope.introduce && _priceType && _areaType) {
                //console.log($scope.planName,$scope.style,$scope.price,$scope.address,$scope.area,$scope.houseStyle);
                var data = {
                    schemename:$scope.planName,
                    city:$scope.address,
                    schemestyle:$scope.style,
                    schemeprice:$scope.price,
                    housetype:$scope.houseStyle,
                    area:$scope.area,
                    flashAddr:$scope.flashAddr,
                    introduce:$scope.introduce,
                    imgepath:$scope.imgepath
                };
                pageLoad.postRequest('/admin/scheme/addScheme',data,function (err,res) {
                    if(err)
                        alert(err);
                    else if(res.status == 0) {
                        $scope.schemeId = res.body;
                        sessionStorage.setItem('schemeId',res.body);
                        $scope.stepone = true;
                        $scope.steptwo = false;
                        $scope.title = '添加图片';
                        pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (err, res) {
                            if(err)
                                alert(err)
                            else {
                                if(res.status == 0){
                                    var arr = [];
                                    res.body.forEach(function (item, index) {
                                        var obj = {
                                            imgUrl:item.imagepath,
                                            id:item.id
                                        };
                                        arr.push(obj);
                                    });
                                    $scope.imgItems = arr;
                                    $scope.$apply();
                                } else {
                                    alert('服务器出错');
                                }
                            }
                        })
                        $scope.$apply();
                        //pageLoad.uploadImg('addZonePhoto');
                    }
                });
            } else {
                alert('信息填写不完全或价格或面积只能为数字类型');
            }
        };
        $(document).on('click','#addPlanTotalHome .steptwo .stepTwoPhotoShowItem img',function(){
            //console.log(1);
            var imgId = $(this).attr('data-imgId');
            sessionStorage.setItem('imgId',imgId);
            var posimgSrc = $(this).attr('src');
            sessionStorage.setItem('posimgSrc',posimgSrc);
            $state.go('index.addWuLian');
        });
        $(document).on('click','#addPlanTotalHome .steptwo .deletePhoto',function () {
            var id = $(this).attr('data-id');
            console.log(1);
            pageLoad.postRequest('/admin/object/deleteObjectImage',{objectImageId:id},function (err,res) {
                if(res.status == 0){
                    pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (err, res) {
                        if(err)
                            alert(err);
                        else {
                            if(res.status == 0){
                                var arr = [];
                                res.body.forEach(function (item, index) {
                                    var obj = {
                                        imgUrl:item.imagepath,
                                        id:item.id
                                    };
                                    arr.push(obj);
                                });
                                $scope.imgItems = arr;
                                $scope.$apply();
                            } else {
                                alert('服务器出错');
                            }
                        }
                    })
                } else{
                    alert('服务器错误');
                }
            })
        });
        //uploadImgTotalHome
        pageLoad.uploadImg('uploadImgTotalHome',function (imgPath) {
            $scope.imgepath = imgPath;
        })
        pageLoad.uploadImg('addPlanTotalHomeAddTagPt',function (imgPath) {
            pageLoad.postRequest('/admin/object/addObjectImage',{schemeId:$scope.schemeId,imagepath:imgPath},function (err, res) {
                if(err)
                    alert(err);
                else {
                    if(res.status == 0){
                        pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (error, response) {
                            if(error)
                                alert(error);
                            else {
                                if(response.status == 0){
                                    console.log(response.body);
                                    var arr = [];
                                    response.body.forEach(function (item, index) {
                                        var obj = {
                                            imgUrl:item.imagepath,
                                            id:item.id
                                        };
                                        arr.push(obj);
                                    });
                                    $scope.imgItems = arr;
                                    $scope.$apply();
                                } else {
                                    alert('服务器出错');
                                }
                            }
                        })
                    } else {
                        alert('服务器出错');
                    }
                }
            })
        })
    }  else {
        $scope.title = '基本信息';
        $scope.style = "简欧";
        $scope.address = "成都";
        $scope.houseStyle = "单间";
        $scope.stepone = false;
        $scope.steptwo = true;
        $scope.cancleHandle = function () {
            $state.go("index.planManage");
        };
        $scope.nextStepHandle = function () {
            /*
             *
             *     private String flashAddr;
             private String imgepath;
             //方案简介，供方案展示时使用
             private String introduce
             */
            var _priceType = Number($scope.price) == NaN ? false : true;
            var _areaType = Number($scope.area) == NaN ? false : true ;
            if($scope.planName && $scope.price && $scope.area && $scope.flashAddr && $scope.imgepath && $scope.introduce && _priceType && _areaType) {
                //console.log($scope.planName,$scope.style,$scope.price,$scope.address,$scope.area,$scope.houseStyle);
                var data = {
                    schemename:$scope.planName,
                    city:$scope.address,
                    schemestyle:$scope.style,
                    schemeprice:$scope.price,
                    housetype:$scope.houseStyle,
                    area:$scope.area,
                    flashAddr:$scope.flashAddr,
                    introduce:$scope.introduce,
                    imgepath:$scope.imgepath
                };
                pageLoad.postRequest('/admin/scheme/addScheme',data,function (err,res) {
                    if(err)
                        alert(err);
                    else if(res.status == 0) {
                        $scope.schemeId = res.body;
                        sessionStorage.setItem('schemeId',res.body);
                        $scope.stepone = true;
                        $scope.steptwo = false;
                        $scope.title = '添加图片';
                        pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (err, res) {
                            if(err)
                                alert(err)
                            else {
                                if(res.status == 0){
                                    var arr = [];
                                    res.body.forEach(function (item, index) {
                                        var obj = {
                                            imgUrl:item.imagepath,
                                            id:item.id
                                        };
                                        arr.push(obj);
                                    });
                                    $scope.imgItems = arr;
                                    $scope.$apply();
                                } else {
                                    alert('服务器出错');
                                }
                            }
                        })
                        $scope.$apply();
                        //pageLoad.uploadImg('addZonePhoto');
                    }
                });
            } else {
                alert('信息填写不完全或价格或面积只能为数字类型');
            }
        };
        //在第二步的时候
        $scope.handleBackStep = function () {
            $scope.stepone = false;
            $scope.steptwo = true;
            $scope.title = '基本信息';
        };
        $scope.rightHandle = function () {
            //交互
            $state.go("index.planManage");
        };
        $scope.handlePreview = function () {
            alert('预览部分暂未开放');
        };
        $(document).on('click','#addPlanTotalHome .steptwo .stepTwoPhotoShowItem img',function(){
            //console.log(1);
            var imgId = $(this).attr('data-imgId');
            sessionStorage.setItem('imgId',imgId);
            var posimgSrc = $(this).attr('src');
            sessionStorage.setItem('posimgSrc',posimgSrc);
            $state.go('index.addWuLian');
        });
        $(document).on('click','#addPlanTotalHome .steptwo .deletePhoto',function () {
            var id = $(this).attr('data-id');
            console.log(1);
            pageLoad.postRequest('/admin/object/deleteObjectImage',{objectImageId:id},function (err,res) {
                if(res.status == 0){
                    pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (err, res) {
                        if(err)
                            alert(err);
                        else {
                            if(res.status == 0){
                                var arr = [];
                                res.body.forEach(function (item, index) {
                                    var obj = {
                                        imgUrl:item.imagepath,
                                        id:item.id
                                    };
                                    arr.push(obj);
                                });
                                $scope.imgItems = arr;
                                $scope.$apply();
                            } else {
                                alert('服务器出错');
                            }
                        }
                    })
                } else{
                    alert('服务器错误');
                }
            })
        });
        //uploadImgTotalHome
        pageLoad.uploadImg('uploadImgTotalHome',function (imgPath) {
            $scope.imgepath = imgPath;
        })
        pageLoad.uploadImg('addPlanTotalHomeAddTagPt',function (imgPath) {
            pageLoad.postRequest('/admin/object/addObjectImage',{schemeId:$scope.schemeId,imagepath:imgPath},function (err, res) {
                if(err)
                    alert(err);
                else {
                    if(res.status == 0){
                        pageLoad.postRequest('/admin/object/listObjectImage',{schemeId:$scope.schemeId},function (error, response) {
                            if(error)
                                alert(error);
                            else {
                                if(response.status == 0){
                                    console.log(response.body);
                                    var arr = [];
                                    response.body.forEach(function (item, index) {
                                        var obj = {
                                            imgUrl:item.imagepath,
                                            id:item.id
                                        };
                                        arr.push(obj);
                                    });
                                    $scope.imgItems = arr;
                                    $scope.$apply();
                                } else {
                                    alert('服务器出错');
                                }
                            }
                        })
                    } else {
                        alert('服务器出错');
                    }
                }
            })
        })
    }
});