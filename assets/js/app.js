class App{
    static SweetAlert = class {

        static showAlertSuccess(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        } 
        
        static showAlertError(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        }

        static showConfirmDelete() {
            return Swal.fire({
                title: 'Are you sure to deactive the selected customer ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, deactive it!'
            })
        }
    }
}

class LocationRegion{
    constructor(id, provinceId, provinceName, districtId, districtName, wardId, wardName, address){
        this.id = id;
        this.provinceId = provinceId;
        this.provinceName = provinceName;
        this.districtId = districtId;
        this.districtName = districtName;
        this.wardId = wardId;
        this.wardName = wardName;
        this.address = address;
    }
}


class Customer{
    constructor(id, fullName, email, phone, balance = 0, deleted = 0, locationRegion){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.balance = balance;
        this.deleted = deleted;
        this.locationRegion = locationRegion;
    }
}

class Deposit {
    constructor(id, customerId, transactionAmount, createdAt, createdBy, updatedAt, updatedBy, deleted) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    }
}


class Withdraw {
    constructor(id, customerId, transactionAmount, createdAt, createdBy, updatedAt, updatedBy, isDeleted) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
        this.isDeleted = isDeleted;
    }
}

class Transfer {
    constructor(id, createdAt, createdBy, updatedAt, updatedBy, deleted, fees, feesAmount, transactionAmount, transferAmount, senderId, recipientId){
        this.id = id;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
        this.fees = fees;
        this.feesAmount = feesAmount;
        this.transactionAmount = transactionAmount;
        this.transferAmount = transferAmount;
        this.senderId = senderId;
        this.recipientId = recipientId

    }
}

class TransferDTO {
    constructor(id,senderId, senderName, recipientId, recipientName, transferAmount, fees, feesAmount){
        this.id =id;
        this.senderId = senderId;
        this.senderName = senderName;
        this.recipientId = recipientId;
        this.recipientName = recipientName;
        this.transferAmount = transferAmount;
        this.fees = fees;
        this.feesAmount = feesAmount;   
    }
}





