let nickCheck = false;
let idCheck = false;


// 아이디 중복 체크
$(function(){
    $('#certifyEmail').on('click', function () {

        let memEmail = $('#memEmail').val();

        $.ajax({
            url: "/member/idDupCheck",
            type: 'post',
            data: {memEmail: memEmail},
            success: function (result) {
                if (result == 0) {
                    idCheck = true;
                    $('#emailHelp').hide();
                    $('#certifyEmail').attr('disabled', true);
                    $('#emailId').attr('disabled', true);
                    $(this).html('발송되었습니다');
                    $('#checkEmail').show();
                } else {
                    alert('사용중인 아이디입니다')
                    idCheck = false;
                }
            }
        });
    })
})



// 닉네임 중복 체크
$('#member_nick').keyup(function () {

    let member_nick = $('#member_nick').val();


    $.ajax({
        url: '/memberNickCheck',
        type: 'post',
        data: {member_nick: member_nick},
        success: function (nickCnt) {
            if (nickCnt != 1) {
                $('.nickCheck').html('사용 가능한 닉네임입니다.');
                nickCheck = true;
            } else {
                $('.nickCheck').html('이미 사용하고 있는 닉네임입니다.');
                return false;
            }
        }
    });

})