
'use strict';

function changeBackgroundColor() {
    var btn = document.getElementById( 'color' ),
        color = btn.getAttribute( 'data-color' );

    if ( ! btn ) {
        return;
    }

    btn.addEventListener( 'click', function() {
        this.style.backgroundColor = color;
    } );
}

/*Phep tinh nhan chia*/
function multiply(){
    var firstNumber  = document.querySelector( '.first-number' ),
        secondNumber = document.querySelector( '.second-number' ),
        multiplyBtn  = document.querySelector( '.multiply' ),
        divideBtn    = document.querySelector( '.divide' ),
        result       = document.querySelector( '.result' );

    multiplyBtn.addEventListener( 'click', function() {
        var firstNumberValue  = firstNumber.value,
            secondNumberValue = secondNumber.value;

        result.innerHTML = firstNumberValue * secondNumberValue;
    } );

    divideBtn.addEventListener( 'click', function() {
        var firstNumberValue  = firstNumber.value,
            secondNumberValue = secondNumber.value;
            
        result.innerHTML = firstNumberValue / secondNumberValue;
    } ); 
}
/*kiem tra tinh hop le cua thong tin*/
function validate() {
    var digits = '0123456789',
        form   = document.getElementById( 'test-form' ),
        temp;

    form.addEventListener( 'submit', function( e ) {
        if ( '' == document.testform.Name.value ) {
            alert( 'Mời nhập tên !' );
            e.preventDefault();
            return;
        }

        if ( '' == document.testform.age.value ) {
            alert( 'Mời nhập tuổi !' );
            e.preventDefault();
            return;
        }

        for ( var i = 0, j = document.testform.age.value.length; i < j; i++ ) { 
            temp = document.testform.age.value.substring(i,i+1) 
            if ( -1 == digits.indexOf( temp ) ) {
                alert ( ' Tuổi không đúng mời nhập lại !' );
                e.preventDefault();
                return;        
            }
        }
    } );    
}

/*Khi nhấp vào liên kết thì hiện lên một modal hmodal hỏi .Nếu OK thì ta link dến trang khác ,không thì ta không làm gì cả*/
function modal() {
    var modal    = document.querySelector( '.modal' ),
        btn      = document.querySelector( '.demo-btn' ),
        closeBtn = document.querySelectorAll( '.modal-close' ),
        saveBtn  = document.querySelector( '.modal-save' );
 
    btn.addEventListener( 'click', function( e ) {
        e.preventDefault();

        document.body.classList.add( 'modal-open' );
    } );

    closeBtn.forEach( function( ele ) {
        ele.addEventListener( 'click', function() {
            document.body.classList.remove( 'modal-open' );

            if ( ele.classList.contains( 'modal-save' ) ) {
                var url = btn.href;
                window.location = url;
            }
        } );
    });
}

document.addEventListener( 'DOMContentLoaded', function() {
    validate();
    modal();
    multiply();
    changeBackgroundColor();
} );