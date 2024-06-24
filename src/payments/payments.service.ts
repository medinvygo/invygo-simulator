import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
    constructor(private readonly configService: ConfigService){}
    private stripe = new Stripe(this.configService.get("STRIPE_SECRET"), {
        apiVersion:"2024-04-10"
    });

    async createCharge(card: Stripe.PaymentMethodCreateParams.Card , amount : number){
        const paymentMethod = await this.stripe.paymentMethods.create({
            type:"card",
            card: card
        })
        const paymentIntent = await this.stripe.paymentIntents.create({
            payment_method: paymentMethod.id,
            amount: amount * 100,
            currency: "usd",
            confirm: true,
            payment_method_types:["card"]
        })
        return paymentIntent
    }
}
