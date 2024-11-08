<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Dialog.Root>
	<Dialog.Trigger
		><span class="font-blue font-strong underline">terms and conditions</span></Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Terms & Conditions</Dialog.Title>
			<Dialog.Description>
                <div class="p2 text-foreground">
                    <ol class="m-4 list-decimal">
                        <li>
                            <strong>Purpose of Data Collection:&nbsp;</strong>By using this contact form, you consent to the
                            collection of your personal information (such as your name, email address, and message)
                            for the sole purpose of addressing your inquiry.
                        </li>
                        <li>
                            <strong>Data Usage:&nbsp;</strong>The information you provide will be used only to respond to your
                            message. We will not share your information with third parties without your consent.
                        </li>
                        <li>
                            <strong>Data Security:&nbsp;</strong> Reasonable measures are in place to protect your data from unauthorized
                            access. However, no system is entirely secure, and we cannot guarantee the absolute security
                            of your information.
                        </li>
                        <li>
                            <strong>Data Retention:&nbsp;</strong> Your data may be retained for up to one month to fulfill the purpose of your inquiry. Afterward, it will be securely deleted.
                        </li>
                        <li>
                            <strong>Your Rights:&nbsp;</strong> You may request the correction or deletion of your personal data
                            at any time by contacting us.
                        </li>
                        <li>
                            <strong>Changes to Terms:&nbsp;</strong> These terms may be updated occasionally. Please review them
                            regularly.
                        </li>
                    </ol>
                    <p>If you have any questions about the terms and conditions, please contact: lukas@siegle.app </p>
                    <p>Last Updated: 8th November 2024</p>
                </div>
                
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Close><div class="p2 rounded-lg border border-border">ok</div></Dialog.Close>
	</Dialog.Content>
</Dialog.Root>
